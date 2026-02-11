import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-courses.html',
  styleUrls: ['./my-courses.css']
})
export class MyCoursesComponent implements OnInit {

  enrolledCourses: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {

    // Browser check (SSR error fix)
    if (isPlatformBrowser(this.platformId)) {

      const storedData = localStorage.getItem('enrolledCourses');

      if (storedData) {
        this.enrolledCourses = JSON.parse(storedData);
      }

    }

  }
}