import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login(form: NgForm) {
    console.log(form.form.controls)
    let newUser = {
      uname: form.form.controls['uname'].value,
      password: form.form.controls['pwd'].value,
    };
}
}
