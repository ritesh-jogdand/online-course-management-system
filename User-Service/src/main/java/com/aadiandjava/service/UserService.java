package com.aadiandjava.service;

import java.util.List;

import com.aadiandjava.entity.User;

public interface UserService {

	User registerUser(User user);
    User getUser(Long id);
    List<User> getAllUsers();
}
