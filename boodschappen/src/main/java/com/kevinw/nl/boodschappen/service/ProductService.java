package com.kevinw.nl.boodschappen.service;

import com.kevinw.nl.boodschappen.model.Product;
import com.kevinw.nl.boodschappen.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository myProductRepository;

    public List<Product> getAllProducts() {
        return myProductRepository.findAll();
    }

    public void createProduct(Product product) {
        myProductRepository.save(product);
    }

    public void removeProduct(String id) {
        Product productToDelete = myProductRepository.findById(Long.parseLong(id)).get();
        myProductRepository.delete(productToDelete);
    }

    public Product getProductById(String id) {
        return myProductRepository.findById(Long.parseLong(id)).get();
    }
}
