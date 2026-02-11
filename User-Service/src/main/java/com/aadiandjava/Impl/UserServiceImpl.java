package com.aadiandjava.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aadiandjava.entity.User;
import com.aadiandjava.repository.UserRepository;
import com.aadiandjava.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
    private final UserRepository repo;

    public UserServiceImpl(UserRepository repo) {
        this.repo = repo;
    }

    @Override
    public User registerUser(User user) {
        if (repo.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        return repo.save(user);
    }

    @Override
    public User getUser(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public List<User> getAllUsers() {
        return repo.findAll();
    }
}
