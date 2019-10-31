package com.stackroute.recommendationservice.service;


import com.stackroute.recommendationservice.domain.OperationDTO;
import com.stackroute.recommendationservice.domain.Recipe;
import com.stackroute.recommendationservice.domain.User;

import java.util.Collection;

public interface RecommendationCommandService {

    public Collection<User> addUser(User user) ;

    public Collection<Recipe> addRecipe(Recipe recipe);

    Collection<User> createLikedOrTried(OperationDTO operationDTO);
}
