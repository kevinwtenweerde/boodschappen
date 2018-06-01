package com.kevinw.nl.boodschappen.service;

import com.kevinw.nl.boodschappen.model.User;
import com.kevinw.nl.boodschappen.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private UserRepository myUserRepository;

    public boolean login(String username, String password) {
        User user = myUserRepository.findAll().stream()
                .filter(u -> u.getUsername().equals(username))
                .findFirst().orElse(null);
        return user != null && user.getPassword().equals(password);
    }
}
