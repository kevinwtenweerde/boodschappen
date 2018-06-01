package com.kevinw.nl.boodschappen.controller;

import com.kevinw.nl.boodschappen.model.Recipe;
import com.kevinw.nl.boodschappen.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/recipes")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {
    @Autowired
    private RecipeService myRecipeService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Recipe> allRecipes() {
        return myRecipeService.getAllRecipes();
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.CREATED)
    public void addRecipe(@Valid @RequestBody Recipe recipe) {
        myRecipeService.createRecipe(recipe);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void removeRecipe(@RequestParam String id) {
        myRecipeService.removeRecipe(id);
    }

}