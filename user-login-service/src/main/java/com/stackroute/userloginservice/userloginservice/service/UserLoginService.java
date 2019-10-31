package com.stackroute.userloginservice.userloginservice.service;

import java.util.ArrayList;

import com.stackroute.userloginservice.userloginservice.domain.UserLoginDTO;
import com.stackroute.userloginservice.userloginservice.repository.UserLoginRepository;
import com.stackroute.userloginservice.userloginservice.domain.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserLoginService implements UserDetailsService {

    @Autowired
    private UserLoginRepository userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserLogin user = userDao.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

    public UserLogin save(UserLoginDTO user) {
        UserLogin newUser = new UserLogin();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setName(user.getName());
        newUser.setAge(user.getAge());
        newUser.setGender(user.getGender());
        newUser.setEmailId(user.getEmailId());
        newUser.setCountry(user.getCountry());
        newUser.setState(user.getState());
        newUser.setCity(user.getCity());
        return userDao.save(newUser);
    }
}
