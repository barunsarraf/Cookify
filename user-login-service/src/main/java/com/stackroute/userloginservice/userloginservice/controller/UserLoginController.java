package com.stackroute.userloginservice.userloginservice.controller;

import com.stackroute.userloginservice.userloginservice.config.JwtTokenUtil;
import com.stackroute.userloginservice.userloginservice.exception.EmailIdAlreadyTakenException;
import com.stackroute.userloginservice.userloginservice.exception.UserNameAlreadyTakenException;
import com.stackroute.userloginservice.userloginservice.domain.*;
import com.stackroute.userloginservice.userloginservice.repository.UserLoginRepository;
import com.stackroute.userloginservice.userloginservice.service.UserLoginService;
import com.stackroute.userloginservice.userloginservice.service.RabbitMQSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class UserLoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserLoginService userDetailsService;

    @Autowired
    RabbitMQSender rabbitMQSender;

    @Autowired
    private UserLoginRepository userDao;

    //Http Endpoint for login
    //JWT Token is generated and returned back to front end
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));
    }

    //Http Endpoint for user registration
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody UserLoginDTO user) throws RuntimeException {
        UserLogin daoUser1 = userDao.findByUsername(user.getUsername());
        UserLogin daoUser2 = userDao.findByEmailId(user.getEmailId());
        if (daoUser1 != null) {
            throw new UserNameAlreadyTakenException("Username Not Available" );
        }
        else if (daoUser2 != null) {
            throw new EmailIdAlreadyTakenException("There is an account linked with this email id");
        }
        else {

            //Message class is used to produce message to user-details queue excluding password
            MessageUser messageUser = new MessageUser(user.getUsername(), user.getName(), user.getAge(), user.getGender(), user.getEmailId(),user.getCountry(), user.getState(), user.getCity());
            rabbitMQSender.sendUser(messageUser);
            return ResponseEntity.ok(userDetailsService.save(user));
        }
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
