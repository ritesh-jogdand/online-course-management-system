import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.services';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.css']
})
export class AdminPanelComponent implements OnInit {

  courses: any[] = [];
  isEdit = false;

  course: any = {
  id: null,
  course_name: '',
  description: '',
  duration: '',
  instructor_name: '',
  price: null
};


  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getAllCourses().subscribe((data: any[]) => {
  this.courses = data;
});

  }

  addCourse() {
    this.courseService.addCourse(this.course).subscribe(() => {
      this.loadCourses();
      this.resetForm();
    });
  }

  editCourse(c: any) {
    this.course = { ...c };
    this.isEdit = true;
  }

  updateCourse() {
    this.courseService.updateCourse(this.course.id, this.course).subscribe(() => {
      this.loadCourses();
      this.resetForm();
    });
  }

  deleteCourse(id: number) {
    if (confirm('Are you sure to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(() => {
        this.loadCourses();
      });
    }
  }

  resetForm() {
    this.course = {
      id: null,
      course_name: '',
      description: '',
      duration: '',
      instructor_name: '',
      price: null
    };
    this.isEdit = false;
  }
}