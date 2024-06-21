import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit(f:NgForm)
  {
    console.log(f)
  }
}
