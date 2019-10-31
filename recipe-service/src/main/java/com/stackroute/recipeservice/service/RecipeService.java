package com.stackroute.recipeservice.service;

import com.stackroute.recipeservice.domain.Recipe;
import com.stackroute.recipeservice.exceptions.RecipeAlreadyExistException;
import com.stackroute.recipeservice.exceptions.RecipeNotFoundException;

import java.math.BigInteger;
import java.util.List;

public interface RecipeService {
    public Recipe saveRecipe(Recipe recipe) throws RecipeAlreadyExistException;
    public List<Recipe> getAllRecipes() ;
    public boolean deleteRecipe(BigInteger id) throws RecipeNotFoundException;
    public Recipe updateRecipe(Recipe recipe) throws RecipeNotFoundException;
    public Recipe getRecipeById(BigInteger id) throws RecipeNotFoundException;
}
