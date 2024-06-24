import { Component } from '@angular/core';
import { createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { auth,provider } from '../environments';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  em = ""; pwd = "";
  signup()
  {
    console.log(this.em, this.pwd);
    createUserWithEmailAndPassword(auth, this.em, this.pwd)
      .then((user) => console.log(user))
    .catch((err)=>console.log(err))
  }
  gsignup()
  {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
}
