package com.aadiandjava.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aadiandjava.entity.User;
import com.aadiandjava.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
    private UserService service;

    // Register User
    @PostMapping
    public ResponseEntity<User> register(@RequestBody User user) {
        return ResponseEntity.status(201).body(service.registerUser(user));
    }

    // Get user by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(service.getUser(id));
    }

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }
}
