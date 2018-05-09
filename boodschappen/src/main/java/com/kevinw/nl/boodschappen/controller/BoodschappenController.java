package com.kevinw.nl.boodschappen.controller;

import com.kevinw.nl.boodschappen.model.User;
import com.kevinw.nl.boodschappen.repository.BoodschappenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BoodschappenController {

    @Autowired
    BoodschappenRepository boodschappenRepository;

    @RequestMapping("/boodschappen")
    public List<User> boodschappen() {
        List<User> users = boodschappenRepository.findAll();
        return users;
    }
}
