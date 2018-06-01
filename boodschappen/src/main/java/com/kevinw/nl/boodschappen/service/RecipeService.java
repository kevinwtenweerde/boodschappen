package com.kevinw.nl.boodschappen.service;

import com.kevinw.nl.boodschappen.model.Recipe;
import com.kevinw.nl.boodschappen.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    @Autowired
    public RecipeRepository myRecipeRepository;

    public List<Recipe> getAllRecipes() {
        return myRecipeRepository.findAll();
    }

    public void createRecipe(Recipe recipe) {
        System.out.println(recipe.getName());
        myRecipeRepository.save(recipe);
    }

    public void removeRecipe(String id) {
        Recipe recipeToDelete = myRecipeRepository.findById(Long.parseLong(id)).get();
        myRecipeRepository.delete(recipeToDelete);
    }
}
