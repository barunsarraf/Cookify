package com.stackroute.userloginservice.userloginservice.service;

import com.stackroute.userloginservice.userloginservice.domain.MessageUser;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQSender {

    @Autowired
    private AmqpTemplate rabbitTemplate;

    @Value("register.exchange")
    private String exchange;

    @Value("register.key")
    private String routingkey;

    public void sendUser(MessageUser user) {
        rabbitTemplate.convertAndSend(exchange,routingkey, user);
    }

}
