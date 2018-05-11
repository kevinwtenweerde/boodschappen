package com.kevinw.nl.boodschappen.repository;

import com.kevinw.nl.boodschappen.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAll();
}
