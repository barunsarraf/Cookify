package com.stackroute.recommendationservice.config;

import com.stackroute.recommendationservice.service.RabbitMQListner;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;


@Configuration
@EnableScheduling
public class RabbitMQConfig {

    @Value("recipe")
    String queueName;
    @Value("user-profile")
    String queueName2;
    @Value("operation")
    String queueNameOperation;

    @Value("register.exchange")
    String exchange;

    @Value("recipe.key")
    private String routingkey;
    @Value("userprofile.key")
    private String routingkey2;
    @Value("operation.key")
    private String routingkeyOperation;
    @Bean
    Queue queue() {
        return new Queue(queueName, false);
    }
    @Bean
    Queue queue2() {
        return new Queue(queueName2, false);
    }
    @Bean
    Queue queueOperation() {
        return new Queue(queueNameOperation, false);
    }

    @Bean
    DirectExchange exchange() {
        return new DirectExchange(exchange);
    }

    @Bean
    Binding binding(Queue queue, DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(routingkey);
    }
    @Bean
    Binding binding2(Queue queue2, DirectExchange exchange) {
        return BindingBuilder.bind(queue2).to(exchange).with(routingkey2);
    }
    @Bean
    Binding bindingOperation(Queue queueOperation, DirectExchange exchange) {
        return BindingBuilder.bind(queueOperation).to(exchange).with(routingkeyOperation);
    }

    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate rabbitTemplate1(ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate1 = new RabbitTemplate(connectionFactory);
        rabbitTemplate1.setMessageConverter(jsonMessageConverter());
        return rabbitTemplate1;
    }


}