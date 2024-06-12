import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';
  isAdmin = false
  isTeacher = false
  isStudent = false;
  userRole = "";
  students = [ "raj", "shekhar", "prasad", "john", "jessi", "vani" ]
  movies = [
    {
      name: "RRR",
      year:2023,
    },
    {
      name: "shwashank redemption",
      year:1998,
    },
    {
      name: "kalki",
      year:2024
    }
  ]
}
