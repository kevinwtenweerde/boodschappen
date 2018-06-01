package com.kevinw.nl.boodschappen.controller;

import com.kevinw.nl.boodschappen.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
