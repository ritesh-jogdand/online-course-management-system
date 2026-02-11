import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  student = {
    name: '',
    email: '',
    password: ''
  };

  selectedCourseId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedCourseId = params['courseId'];
    });
  }

  // ✅ Register function with validation
  register(form: NgForm) {
    if (!form.valid) {
      alert('Please fill all fields correctly and provide a valid email!');
      return;
    }

    // Save to localStorage only if valid
    let users = JSON.parse(localStorage.getItem('students') || '[]');
    users.push(this.student);
    localStorage.setItem('students', JSON.stringify(users));

    alert('Registration Successful ✅');
    this.student = { name: '', email: '', password: '' };
    form.resetForm();

    // Navigate to My Courses page after registration
    this.router.navigate(['/my-courses']);
  }

}