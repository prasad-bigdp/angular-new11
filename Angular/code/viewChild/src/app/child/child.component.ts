import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  c = 0;
  name = "prasad"
  incr() {
    this.c++;
    console.log(this.c)
  }
  decr() {
    this.c--;
  }
  reset() {
    this.c=0;
  }
  doSomething()
  {
    console.log("i did something")
  }
}
