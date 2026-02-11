package com.aadiandjava.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aadiandjava.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course,Integer>{

	Optional<Course> findById(Long id);

	void deleteById(Long id);
}
