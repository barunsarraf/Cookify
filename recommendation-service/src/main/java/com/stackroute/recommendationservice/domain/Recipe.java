package com.stackroute.recommendationservice.domain;

import lombok.*;
import org.neo4j.ogm.annotation.*;


import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@NodeEntity(label="Recipe")
public class Recipe {

    @Id
    @Property(name="name")
    private String recipeName;

    @Property(name="serves")
    private int servesFor;

    private BigInteger id;
    @Property(name="publishedBy")
    private String publishedBy;
    private List<Ingredients> ingredients=new ArrayList<Ingredients>();
    private Procedure procedure;
    @Property(name="cuisine")
    private String cuisine;
    @Property(name="course")
    private String course;
    private List<String> images;
    @Property(name="cookingTime")
    private int cookingTime;
    private float rating;
    private BigDecimal price;
    private BigInteger publishedOn;
    private List<Comment> comments;
    private List<Rating> ratings;

    float ratingDuplicate;
    int ratingCount;
}
