package com.exampleElecti.Electi.controller;


import com.exampleElecti.Electi.model.User;
import com.exampleElecti.Electi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

/*
 * @Author: Cervantes Juan
 * @Date: 1/10/2025
 * */

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository userRepository;//Repository of all the users

    @Autowired
    public UserController(UserRepository userRepository) {//Constructor for the repository
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> users(){//Returns all the users on the database
        return userRepository.findAll();
    }

    @GetMapping("/{id}")//Find the user by their Id
    public ResponseEntity<User> getUserId(@PathVariable String id){
        Optional<User> user = userRepository.findById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

}
