package com.kevinw.nl.boodschappen.controller;

import com.kevinw.nl.boodschappen.model.Product;
import com.kevinw.nl.boodschappen.repository.ProductRepository;
import com.kevinw.nl.boodschappen.service.LoginService;
import com.kevinw.nl.boodschappen.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BoodschappenController {

    //Services
    @Autowired
    private LoginService myLoginService;

    @RequestMapping("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public boolean login(@RequestParam String username,
                        @RequestParam String password) {
        return myLoginService.login(username, password);
    }
}
