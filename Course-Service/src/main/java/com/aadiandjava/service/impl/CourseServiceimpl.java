package com.aadiandjava.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aadiandjava.entity.Course;
import com.aadiandjava.repository.CourseRepository;
import com.aadiandjava.service.CourseService;

@Service
public class CourseServiceimpl implements CourseService {

    @Autowired
    private CourseRepository repo;

    @Override
    public Course saveCourse(Course course) {
        return repo.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return repo.findAll();
    }

    @Override
    public Course getCourseById(Long id) {
        return repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Course not found with id: " + id));
    }

    @Override
    public Course updateCourse(Long id, Course course) {
        Course c = getCourseById(id);

        c.setCourseName(course.getCourseName());
        c.setDescription(course.getDescription());
        c.setPrice(course.getPrice());
        c.setDuration(course.getDuration());
        c.setInstructorName(course.getInstructorName());

        return repo.save(c);
    }


    @Override
    public void deleteCourse(Long id) {
        repo.deleteById(id);
    }
}
