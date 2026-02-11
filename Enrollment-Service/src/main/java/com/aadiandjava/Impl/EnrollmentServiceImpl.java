package com.aadiandjava.Impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aadiandjava.entity.Enrollment;
import com.aadiandjava.repository.EnrollmentRepository;
import com.aadiandjava.rest.CourseClient;
import com.aadiandjava.rest.UserClient;
import com.aadiandjava.service.EnrollmentService;

@Service
public class EnrollmentServiceImpl implements EnrollmentService{

	@Autowired
    private EnrollmentRepository repo;

    @Autowired
    private UserClient userClient;

    @Autowired
    private CourseClient courseClient;

    // Enroll user into course
    public Enrollment enroll(Long userId, Long courseId) {

        // ✅ validate user
        userClient.getUserById(userId);

        // ✅ validate course
        courseClient.getCourseById(courseId);

        Enrollment enrollment = new Enrollment();
        enrollment.setUserId(userId);
        enrollment.setCourseId(courseId);
        enrollment.setEnrollmentDate(LocalDate.now());

        return repo.save(enrollment);
    }

    // View enrolled courses of a user
    public List<Enrollment> getEnrollmentsByUser(Long userId) {
        return repo.findByUserId(userId);
    }
    public List<Enrollment> getAllEnrollments() {
        return repo.findAll();
    }
}
