package com.kevinw.nl.boodschappen.repository;

import com.kevinw.nl.boodschappen.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    List<Recipe> findAll();
}
