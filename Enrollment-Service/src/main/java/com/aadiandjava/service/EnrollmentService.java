package com.aadiandjava.service;

import java.util.List;

import com.aadiandjava.entity.Enrollment;

public interface EnrollmentService {

	Enrollment enroll(Long userId, Long courseId);

	List<Enrollment> getEnrollmentsByUser(Long userId);

	List<Enrollment> getAllEnrollments();
}
