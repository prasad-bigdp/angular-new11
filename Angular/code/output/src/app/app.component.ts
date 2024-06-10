import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'output';
  counter = 0;
  onCounterChange(val:number)
  {
    this.counter = val;
  }
}
