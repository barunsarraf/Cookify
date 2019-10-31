package com.stackroute.recipeservice.repository;

import com.stackroute.recipeservice.domain.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;


public interface RecipeRepository extends MongoRepository<Recipe, BigInteger> {
}
