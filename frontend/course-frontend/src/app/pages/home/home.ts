import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class HomeComponent {

  courses:any[]=[];
  loading=true;

  constructor(private http:HttpClient ,private router: Router) {}

  ngOnInit(): void {

    this.http.get('http://localhost:8080/courses')
    .subscribe({

      next:(data:any)=>{
        console.log("API RESPONSE 👉",data);
        this.courses=data;
        this.loading=false;
      },

      error:(err)=>{
        console.log("API ERROR ❌",err);
        this.loading=false;
      }

    });

  }

 viewDetails(course: any) {
  // Optional: selected course store karna
  localStorage.setItem("selectedCourse", JSON.stringify(course));

  // Navigate to register page
  this.router.navigate(['/register']);
}

}