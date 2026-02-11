package com.aadiandjava.rest;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "COURSE-SERVICE",url = "http://localhost:8081")
public interface CourseClient {

	@GetMapping("/courses/{id}")
    Object getCourseById(@PathVariable Long id);
}
