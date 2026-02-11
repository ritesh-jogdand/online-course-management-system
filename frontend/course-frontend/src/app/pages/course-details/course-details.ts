import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.html',
  styleUrls: ['./course-details.css']
})
export class CourseDetailsComponent implements OnInit {

  courseId!: number;
  course: any;

  // Dummy backend data
  courses = [
    {
      courseId: 1,
      courseName: 'Angular',
      description: 'Frontend Framework',
      price: 5000,
      duration: '3 Months',
      instructorName: 'Arpita'
    },
    {
      courseId: 2,
      courseName: 'Spring Boot',
      description: 'Backend Framework',
      price: 6000,
      duration: '4 Months',
      instructorName: 'Ritesh'
    },
    {
      courseId: 3,
      courseName: 'Microservices',
      description: 'Backend Framework',
      price: 8000,
      duration: '6 Months',
      instructorName: 'Aditya'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // URL se id lena
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    // Course find karna
    this.course = this.courses.find(c => c.courseId === this.courseId);
  }

  // ✅ ENROLL BUTTON
  enroll() {
    if (!this.course) return;

    // Browser check
    if (typeof window !== 'undefined') {
      // 1️⃣ Existing enrolled courses read karo
      let enrolled = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');

      // 2️⃣ Duplicate check
      const alreadyEnrolled = enrolled.find((c: any) => c.courseId === this.course.courseId);
      if (alreadyEnrolled) {
        alert("You have already enrolled in this course!");
        return;
      }

      // 3️⃣ Push current course
      enrolled.push(this.course);

      // 4️⃣ Save back to localStorage
      localStorage.setItem('enrolledCourses', JSON.stringify(enrolled));

      // 5️⃣ Success alert
      alert("Course Enrolled Successfully!");

      // 6️⃣ Redirect to My Courses
      this.router.navigate(['/my-courses']);

     this.router.navigate(['/register'], {
    queryParams: { courseId: this.course.courseId }
  });
    }
  }
}