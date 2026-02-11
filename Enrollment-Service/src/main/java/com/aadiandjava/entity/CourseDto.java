package com.aadiandjava.entity;

import lombok.Data;

@Data
public class CourseDto {

	private Long id;
	 
    private String courseName;
    
    private String description;
    
    private double price;
    
    private String duration;
    
    private String instructorName;
}
