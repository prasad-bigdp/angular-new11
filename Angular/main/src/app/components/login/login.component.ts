import { Component } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../environments';
import { Router } from '@angular/router';
auth
auth
signInWithEmailAndPassword
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  em = ""; pwd = "";
  constructor(private route:Router){}
  signin()
  {
    console.log(this.em, this.pwd);
    signInWithEmailAndPassword(auth, this.em, this.pwd)
      .then((user) => {
        console.log(user);
        this.route.navigate(['/dashboard'])
      })
      .catch((err) => {
      alert("error in login")
    })
  }
}
