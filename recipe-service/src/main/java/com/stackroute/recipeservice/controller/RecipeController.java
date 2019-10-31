package com.stackroute.recipeservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.recipeservice.domain.Recipe;
import com.stackroute.recipeservice.domain.RecipeDTO;
import com.stackroute.recipeservice.exceptions.RecipeAlreadyExistException;
import com.stackroute.recipeservice.exceptions.RecipeNotFoundException;
import com.stackroute.recipeservice.service.RecipeService;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping(value="api/v1")
@CrossOrigin("*")
public class RecipeController {

    @Autowired
    RecipeService recipeService;

    @Autowired
    RabbitTemplate rabbitTemplate;

    public RecipeController(RecipeService recipeService)
    {
      this.recipeService=recipeService;
    }
   @PostMapping("recipe")
     public ResponseEntity<?> saveRecipe(@RequestBody Recipe recipe) throws JsonProcessingException
    {
        ResponseEntity responseEntity;
        try
        {
            String queueName="recipe";
            String exchange="register.exchange";
            String routingkey="recipe.key";
            String routingkey2="recipeuser.key";
            RecipeDTO recipe1=new RecipeDTO();
            recipe1.setRecipeName(recipe.getRecipeName());
            recipe1.setServesFor(recipe.getServesFor());
            recipe1.setPublishedBy(recipe.getPublishedBy());
            recipe1.setIngredients(recipe.getIngredients());
            recipe1.setProcedure(recipe.getProcedure());
            recipe1.setCuisine(recipe.getCuisine());
            recipe1.setCourse(recipe.getCourse());
            recipe1.setCookingTime(recipe.getCookingTime());
            recipe1.setPublishedOn(recipe.getPublishedOn());
           recipeService.saveRecipe(recipe);
           rabbitTemplate.convertAndSend(exchange,routingkey2,recipe);
           rabbitTemplate.convertAndSend(exchange,routingkey,recipe1);
            System.out.println(new ObjectMapper().writeValueAsString(recipe1));
           responseEntity=new ResponseEntity<String>("Recipe Saved", HttpStatus.CREATED);
        }
        catch(JsonProcessingException | RecipeAlreadyExistException e)
        {
            responseEntity=new ResponseEntity<String>(e.getMessage(),HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
    @GetMapping("recipe")
     public ResponseEntity<?> getAllRecipes()
        {
            return new ResponseEntity<List<Recipe>>(recipeService.getAllRecipes(),HttpStatus.OK);


        }
     @DeleteMapping("recipe/{id}")
     public ResponseEntity<?> deleteRecipe(@PathVariable("id") BigInteger id)
     {   ResponseEntity responseEntity;
         try{
             recipeService.deleteRecipe(id);
             return new ResponseEntity("Succesfully deleted", HttpStatus.OK);
         }catch(RecipeNotFoundException ex){
             return new ResponseEntity(ex.getMessage(),HttpStatus.CONFLICT);
         }

     }
     @PutMapping("recipe")
     public ResponseEntity<?> updateRecipe(@RequestBody Recipe recipe){
         ResponseEntity responseEntity;
         try{
             recipeService.updateRecipe(recipe);
             return new ResponseEntity("Succesfully updated",HttpStatus.OK);
         }
         catch(RecipeNotFoundException ex)
         {
             return new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
         }
     }


}
