import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  myForm: FormGroup;
  constructor(private rt:Router) {
    this.myForm = new FormGroup({
      uname: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      pwd:new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
  }
  register()
  {
    console.log(this.myForm)
    if (this.myForm.valid)
    {
      this.rt.navigateByUrl('/login')
      }
  }

}
