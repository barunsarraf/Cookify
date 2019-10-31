package com.stackroute.recipeservice.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.amqp.support.converter.SimpleMessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;


@Configuration
@EnableScheduling
public class RabbitMQConfig {

    //@Value("recipe")
    String queueName="recipe";
    String queueNameUser="publish-recipe";


   // @Value("register.exchange")
    String exchange="register.exchange";

 //   @Value("recipe.key")
    private String routingkey="recipe.key";
    private  String routingkeyRecipe="recipeuser.key";

    @Bean
    Queue queue() {
        return new Queue(queueName, false);
    }

    @Bean
    Queue queue2() {
        return new Queue(queueNameUser, false);
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
        return BindingBuilder.bind(queue2).to(exchange).with(routingkeyRecipe);
    }

    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }



//    @Bean
//    SimpleMessageListenerContainer container(ConnectionFactory connectionFactory)
//    {
//        SimpleMessageListenerContainer container=new SimpleMessageListenerContainer();
//        container.setConnectionFactory(connectionFactory);
//        container.setQueueNames(queueName);
//        return container;
//    }
    @Bean
    public AmqpTemplate rabbitTemplate1(ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate1 = new RabbitTemplate(connectionFactory);
        rabbitTemplate1.setMessageConverter(jsonMessageConverter());
        return rabbitTemplate1;
    }


}