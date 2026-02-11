import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-registration.html',
})
export class UserRegistrationComponent {

  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
  alert(`User Registered!
Name: ${this.name}
Email: ${this.email}`);
}

}