import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080/courses';

  constructor(private http: HttpClient) {}

  // GET all courses
  getAllCourses() {
    return this.http.get<any[]>(this.baseUrl);
  }

  // ADD course
  addCourse(course: any) {
    return this.http.post<any>(this.baseUrl, course);
  }

  // UPDATE course
  updateCourse(id: number, course: any) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, course);
  }

  // DELETE course
  deleteCourse(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
