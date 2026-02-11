package com.aadiandjava.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aadiandjava.entity.Course;
import com.aadiandjava.repository.CourseRepository;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/courses")
public class CourseRestController {
	    
	    @Autowired
	    private CourseRepository repo;

	    @GetMapping
	    public List<Course> getAllCourses() {
	        return repo.findAll();
	    }

	    @PostMapping
	    public Course addCourse(@RequestBody Course course) {
	        return repo.save(course);
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Course> getCourse(@PathVariable Long id) {
	        return repo.findById(id)
	                   .map(ResponseEntity::ok)
	                   .orElse(ResponseEntity.notFound().build());
	    }

	    @PutMapping("/{id}")
	    public Course updateCourse(@PathVariable String id, @RequestBody Course course) {
	        course.setCourseName(id);
	        return repo.save(course);
	    }

	    @DeleteMapping("/{id}")
	    @Transactional
	    public void deleteCourse(@PathVariable Long id) {
	        repo.deleteById(id);
	    }
}
