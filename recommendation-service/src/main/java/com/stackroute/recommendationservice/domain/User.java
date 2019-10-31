package com.stackroute.recommendationservice.domain;

import lombok.*;
import org.neo4j.ogm.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@NodeEntity(label = "User")
public class User {
    @Id
    @Property(name="username")
    private String username;

    @Property(name="name")
    private String name;

    @Property(name="emailId")
    private String emailId;

    @Property(name="city")
    private String city;

    @Property(name="state")
    private String state;
    @Property(name = "gender")
    private String gender;
    @Property(name = "age")
    private int age;

    @Property(name="image")
    private String image;
    @Property(name="address")
    private String address;
    @Property(name="country")
    private String country;
    private List<Recipe> recipesPublished=new ArrayList<Recipe>();
    private List<Recipe> recipesLiked=new ArrayList<Recipe>();
    private List<Recipe> recipesTried=new ArrayList<Recipe>();

    @Property(name="cuisine")
    private List<String> Cusines=new ArrayList<String>();

}
