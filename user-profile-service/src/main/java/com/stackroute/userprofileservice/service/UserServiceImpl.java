package com.stackroute.userprofileservice.service;

import com.stackroute.userprofileservice.domain.Recipe;
import com.stackroute.userprofileservice.domain.User;
import com.stackroute.userprofileservice.domain.UserOperationRecipe;
import com.stackroute.userprofileservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userserviceimpl")
public class UserServiceImpl implements UserService {


    private UserRepository userRepository;

    @Autowired
    private RabbitMQSender rabbitMQSender;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User savetryrecipe(String username, Recipe recipe) {
        User existinguser = userRepository.findByUsername(username);
        List<Recipe> existingtriedrecipe=existinguser.getRecipesTried();
        existingtriedrecipe.add(recipe);
        existinguser.setRecipesTried(existingtriedrecipe);
        userRepository.save(existinguser);

        UserOperationRecipe userOperationRecipe=new UserOperationRecipe(username,recipe,"try");

        rabbitMQSender.sendOperationRecipetoRecommedationService(userOperationRecipe);

        return existinguser;
    }

    @Override
    public User savelikedrecipe(String username, Recipe recipe) {

            User existinguser = userRepository.findByUsername(username);
            List<Recipe> existinglikedrecipe=existinguser.getRecipesLiked();
            existinglikedrecipe.add(recipe);
            existinguser.setRecipesLiked(existinglikedrecipe);
            userRepository.save(existinguser);
        UserOperationRecipe userOperationRecipe=new UserOperationRecipe(username,recipe,"like");
        rabbitMQSender.sendOperationRecipetoRecommedationService(userOperationRecipe);
            return existinguser;

    }


    @Override
    public User saveuser(User user) {
        userRepository.save(user);
        return user;
    }

    @Override
    public User getUserByUserName(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User updateuser(User user){

            User existinguser = userRepository.findByUsername(user.getUsername());
            existinguser.setAge(user.getAge());
            existinguser.setAddress(user.getAddress());
            existinguser.setCity(user.getCity());
            existinguser.setState(user.getState());
            existinguser.setCountry(user.getCountry());
            existinguser.setImage(user.getImage());
            userRepository.save(existinguser);
            return existinguser;
    }


}
