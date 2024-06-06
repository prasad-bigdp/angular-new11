import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ou!:string; op!:string; tu!:string; tp!:string;
  oneWayData(e: Event)
  {
    const inp = e.target as HTMLInputElement;
    if (inp.type == "email")
      this.ou = inp.value;
    else if(inp.type == "password")
       this.op = inp.value      
  }
  myFormSubmit()
  {
    alert("details submitted successfully"+ this.tu+this.tp)
  }
}
