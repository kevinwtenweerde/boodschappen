package com.kevinw.nl.boodschappen.repository;

import com.kevinw.nl.boodschappen.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoodschappenRepository extends JpaRepository<User, Long> {
    List<User> findAll();
}
