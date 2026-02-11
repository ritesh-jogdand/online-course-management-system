import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Course Interface
interface Course {
  id: number;
  courseName: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-courses.html',
  styleUrls: ['./my-courses.css']
})
export class MyCoursesComponent implements OnInit {

  enrolledCourses: Course[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {

    // Get data from localStorage
    const storedCourses = localStorage.getItem('enrolledCourses');

    if (storedCourses) {
      const parsedCourses: Course[] = JSON.parse(storedCourses);

      // Remove duplicate courses by ID
      this.enrolledCourses = parsedCourses.filter(
        (course, index, array) =>
          array.findIndex(c => c.id === course.id) === index
      );

    } else {
      this.enrolledCourses = [];
    }

    console.log('Enrolled Courses:', this.enrolledCourses);
  }

  // Admin Button Navigation
  goToAdmin() {
    this.router.navigate(['/admin']);
  }

}