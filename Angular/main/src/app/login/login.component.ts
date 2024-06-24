import { Component } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../environments';
auth
signInWithEmailAndPassword
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  em = ""; pwd = "";
  signin()
  {
    console.log(this.em, this.pwd);
    signInWithEmailAndPassword(auth, this.em, this.pwd)
      .then((user) => {
        console.log(user);
        alert("login successful")
      })
      .catch((err) => {
      alert("error in login")
    })
  }
}
