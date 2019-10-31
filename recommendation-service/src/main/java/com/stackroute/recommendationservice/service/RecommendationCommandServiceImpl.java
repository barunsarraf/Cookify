package com.stackroute.recommendationservice.service;


import com.stackroute.recommendationservice.domain.OperationDTO;
import com.stackroute.recommendationservice.domain.Recipe;
import com.stackroute.recommendationservice.domain.User;
import com.stackroute.recommendationservice.repository.RecommendationCommandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class RecommendationCommandServiceImpl implements RecommendationCommandService{

    @Autowired
    private  RecommendationCommandRepository recommendationCommandRepository;

    public RecommendationCommandServiceImpl(RecommendationCommandRepository recommendationCommandRepository) {
        this.recommendationCommandRepository = recommendationCommandRepository;
    }



    @Override
    public Collection<User> addUser(User user){
        recommendationCommandRepository.createUser(user);
        recommendationCommandRepository.staysIn(user);
        Collection<User> users=null;
        return users;
//        return recommendationCommandRepository.interestedCuisine(user,user.getCuisine());


    }

    @Override
    public Collection<Recipe> addRecipe(Recipe recipe) {
        recommendationCommandRepository.createRecipe(recipe);
         recommendationCommandRepository.linkCourse(recipe);
        return  recommendationCommandRepository.createPublished(recipe);

    }


    @Override
    public Collection<User> createLikedOrTried(OperationDTO operationDTO) {

        if(operationDTO.getOperation().equals("liked"))
            return recommendationCommandRepository.createLiked(operationDTO.getUsername(),operationDTO.getRecipe());
        else if(operationDTO.getOperation().equals("tried"))
            return recommendationCommandRepository.createTried(operationDTO.getUsername(),operationDTO.getRecipe());
        else
            return recommendationCommandRepository.deleteLiked(operationDTO.getUsername(),operationDTO.getRecipe());
    }

}
