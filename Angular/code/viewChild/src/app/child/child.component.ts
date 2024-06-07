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
  }
  decr() {
    this.c--;
  }
  reset() {
    this.c=0;
  }
}
