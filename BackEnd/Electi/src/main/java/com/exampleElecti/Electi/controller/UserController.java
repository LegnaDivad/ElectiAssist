package com.exampleElecti.Electi.controller;


import com.exampleElecti.Electi.model.ApiResponse;
import com.exampleElecti.Electi.model.LoginRequest;
import com.exampleElecti.Electi.model.User;
import com.exampleElecti.Electi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){

        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());
        if(userOptional.isPresent()){//Checks if the user its in the repository
            User user = userOptional.get();
            if(user.getPassword().equals(loginRequest.getPassword())){//If the password matches
                return ResponseEntity.ok(new ApiResponse("Inicio de sesion exitoso", user));//return STATUS 200 OK
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("Contrasena incorrecta, intenta de nuevo"));
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("No se encontro el correo, ingresa de nuevo el correo correcto"));
        }
    }

    @PostMapping("/register")//Register the user onto the database
    public ResponseEntity<?> register(@RequestBody User user){//Requesting as parameter the User toatach it as body
        if(userRepository.findByEmail(user.getEmail()).isPresent()){//If the response to the request its not null(present)
            return new ResponseEntity<>(
                    new ApiResponse("Ya estas registrado!"),//Returns an instance with the message within
                    HttpStatus.CONFLICT //STATUS 409 CONFLICT
            );
        }

        //If the user its no in the repository
        User userToInsert = new User();//Creates a new user and fill it with the receiving data
        userToInsert.setName(user.getName());
        userToInsert.setEmail(user.getEmail());
        userToInsert.setPassword(user.getPassword());
        userToInsert.setSection((user.getSection()));
        userToInsert.setAge(userToInsert.getAge());

        userRepository.save(userToInsert);//Save it to the repository

        return new ResponseEntity<>(//Return the response message
                new ApiResponse("Usuario creado con exito", userToInsert),
                HttpStatus.CREATED //STATUS 201
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable Integer id){//Deletes the user using its id, (PathVariable takes it from the URI)
        //Maps all the users on the repository to their id, finds the id, deletes it and return the response
        return userRepository.findById(id)
                .map(user -> {
                    userRepository.delete(user);
                    return ResponseEntity.noContent().build();//Status 204 No content
                }).orElse(ResponseEntity.notFound().build());//Status 404 Not found if it didn't find it
    }


}
