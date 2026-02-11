package com.aadiandjava.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aadiandjava.entity.Enrollment;
import com.aadiandjava.service.EnrollmentService;

@RestController
@RequestMapping("/enroll")
@CrossOrigin("*")
public class EnrollmentRestController {

	@Autowired
    private EnrollmentService service;

    // POST /enroll
    @PostMapping
    public Enrollment enroll(@RequestParam Long userId,
                             @RequestParam Long courseId) {
        return service.enroll(userId, courseId);
    }

    @GetMapping
    public List<Enrollment> getAllEnrollments() {
        return service.getAllEnrollments();
    }

    
    
    // GET /enroll/user/{userId}
    @GetMapping("/user/{userId}")
    public List<Enrollment> getUserEnrollments(@PathVariable Long userId) {
        return service.getEnrollmentsByUser(userId);
    }
}
