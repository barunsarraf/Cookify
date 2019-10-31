package com.stackroute.recommendationservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.stackroute.recommendationservice.domain.OperationDTO;
import com.stackroute.recommendationservice.domain.Recipe;
import com.stackroute.recommendationservice.domain.User;
import com.stackroute.recommendationservice.service.RecommendationCommandService;
import io.swagger.annotations.Api;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Api
@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RecommendationCommandController {


    @Autowired
    RecommendationCommandService recommendationCommandService;
    RabbitTemplate rabbitTemplate;
    @PostMapping("/user")
    public  ResponseEntity<Collection<User>> user(@RequestBody User user) throws JsonProcessingException, InterruptedException {

        ResponseEntity responseEntity;

        return new ResponseEntity<Collection<User>>(recommendationCommandService.addUser(user),HttpStatus.CREATED);


    }

    @PostMapping("/recipe")
    public ResponseEntity<?> addRecipe(@RequestBody Recipe recipe) throws JsonProcessingException {

        ResponseEntity responseEntity;

        return new ResponseEntity<Collection<Recipe>>(recommendationCommandService.addRecipe(recipe),HttpStatus.CREATED);
    }


    @PostMapping("/operation")
    public ResponseEntity<?> operation(@RequestBody OperationDTO operationDTO)
    {
        return new ResponseEntity<Collection<User>>(recommendationCommandService.createLikedOrTried(operationDTO),HttpStatus.OK);
    }


}
