import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  courses = [
    { courseId: 1, courseName: 'Angular Basics', duration: '3 weeks' },
    { courseId: 2, courseName: 'React Fundamentals', duration: '4 weeks' },
    { courseId: 3, courseName: 'Vue.js Guide', duration: '2 weeks' }
  ];
}