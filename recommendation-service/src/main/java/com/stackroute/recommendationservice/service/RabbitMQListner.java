package com.stackroute.recommendationservice.service;


import com.stackroute.recommendationservice.domain.OperationDTO;
import com.stackroute.recommendationservice.domain.Recipe;
import com.stackroute.recommendationservice.domain.User;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RabbitMQListner {

    @Autowired
    private RecommendationCommandService recommendationCommandService;

//    @RabbitListener(queues = "operation")
//    public void recievedMessage(OperationDTO operationDTO)  {
//        System.out.println("Recieved Message From RabbitMQ: " + operationDTO);
//
//        recommendationCommandService.createLikedOrTried(operationDTO);
//    }

    @RabbitListener(queues = "user-profile")
    public void recievedUserMessage(User user) {
        System.out.println("Recieved Message From RabbitMQ: " + user);

        recommendationCommandService.addUser(user);
    }

   @RabbitListener(queues = "recipe")
    public void receiveMessage(Recipe recipe)  {

        System.out.println("Recieved Message From RabbitMQ: " + recipe);
        recommendationCommandService.addRecipe(recipe);
    }
}
