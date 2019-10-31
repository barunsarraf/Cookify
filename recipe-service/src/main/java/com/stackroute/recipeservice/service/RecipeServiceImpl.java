package com.stackroute.recipeservice.service;

import com.stackroute.recipeservice.domain.Recipe;
import com.stackroute.recipeservice.exceptions.RecipeAlreadyExistException;
import com.stackroute.recipeservice.exceptions.RecipeNotFoundException;
import com.stackroute.recipeservice.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements RecipeService {
    RecipeRepository recipeRepository;

    @Autowired
    public RecipeServiceImpl(RecipeRepository recipeRepository){
        this.recipeRepository=recipeRepository;
    }

    @Override
    public Recipe saveRecipe(Recipe recipe) throws RecipeAlreadyExistException {
//        if(recipeRepository.existsById(recipe.getId()))
//        {
//            throw new RecipeAlreadyExistException("Recipe Already Exists");
//        }
        Recipe savedRecipe= recipeRepository.save(recipe);
        return savedRecipe;
    }

    @Override
    public List<Recipe> getAllRecipes()  {
        List allRecipes=recipeRepository.findAll();

        return recipeRepository.findAll();
    }

    @Override
    public boolean deleteRecipe(BigInteger id) throws RecipeNotFoundException {
      if(recipeRepository.existsById(id))
      {
          recipeRepository.deleteById(id);return true;
      }
      else
      {
          throw new RecipeNotFoundException("No Such Recipe");
      }

    }

    @Override
    public Recipe updateRecipe(Recipe recipe) throws RecipeNotFoundException {

        System.out.println(recipeRepository.existsById(recipe.getId()));
        if(recipeRepository.existsById(recipe.getId()))
        {
            float n=(recipe.getRatingCount())+1;
            float finalrating=(recipe.getRatingduplicate()+recipe.getRating())/n;
            recipe.setRating(finalrating);
            System.out.println(finalrating);
            recipe.setRatingduplicate(finalrating);
            recipe.setRatingCount((int)n);
            System.out.println(n);
            Recipe  recipe1=recipeRepository.save(recipe);
            return  recipe1;
        }
        else {
            throw new RecipeNotFoundException("No Such Recipe");
        }
    }

    @Override
    public Recipe getRecipeById(BigInteger id) throws RecipeNotFoundException {
        Optional<Recipe> recipe1=recipeRepository.findById(id);
        if(recipe1.isEmpty())
        {
            Recipe recipe2=recipe1.get();
            return  recipe2;
        }
        else
        {
            throw new RecipeNotFoundException("No Recipe with such Id");
        }
    }
}
