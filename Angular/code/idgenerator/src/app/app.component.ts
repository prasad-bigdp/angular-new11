import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imageURl = "";
  namae = "";
  email = "";
  phno = "";
  isHide=true
  show()
  {
   this.isHide=false
  }

}
