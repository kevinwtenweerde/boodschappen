package com.kevinw.nl.boodschappen.controller;

import com.kevinw.nl.boodschappen.model.Product;
import com.kevinw.nl.boodschappen.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductService myProductService;

    @RequestMapping(method = RequestMethod.GET)

    public List<Product> allProducts() {
        return myProductService.getAllProducts();
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.CREATED)
    public void addProduct(@Valid @RequestBody Product product) {
        myProductService.createProduct(product);
    }

}
