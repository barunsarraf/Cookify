//package com.stackroute.recommendationservice.repository;
//
//
//import com.stackroute.recommendationservice.domain.Recipe;
//import com.stackroute.recommendationservice.domain.User;
//import org.junit.After;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.data.neo4j.DataNeo4jTest;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.ArrayList;
//import java.util.List;
//@RunWith(SpringRunner.class)
//@DataNeo4jTest
//public class RecommendationCommandRepositoryTest {
//
//    /**
//     * Used AutoWire by property to inject RecommendationCommandRepository here
//     */
//    @Autowired
//    private RecommendationCommandRepository recommendationCommandRepository;
//    private User user;
//    private Recipe recipe;
//
//    /**
//     * Execute this before each test case
//     */
//    @Before
//    public void setUp() {
//        //Add new track by setter methods
//        User user=new User();
//        user.setName("Antara");
//        user.setUsername("ants");
//        user.setAge(22);
//        user.setCity("Kolkata");
//        user.setEmailId("ants@gmail.com");
//        user.setCountry("India");
//        user.setState("West Bengal");
//        List<String> cuisine=new ArrayList<>();
//        cuisine.add("Indian");
//        cuisine.add("Chinese");
//        user.setCuisine(cuisine);
//    }
//
////    /**
////     * Execute this after every test case
////     */
////    @After
////    public void tearDown() {
////        //Free the repository after every test case
////        recommendationCommandRepository.deleteAll();
////        this.recipe = null;
////    }
//
//
//    @Test
//    public void givenUserSaveThatUser() {
//        //assert
//        Assert.assertEquals(user, recommendationCommandRepository.createUser(user));
//    }
//
//}
