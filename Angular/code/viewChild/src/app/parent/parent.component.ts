import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  @ViewChild(ChildComponent) count!: ChildComponent;
  c = 0;
  name = '';
  ngAfterViewInit() {
    console.log('ng after view init clicked');
    this.count.incr();
    this.name = this.count.name;
  }
 
  callChild() {
    this.count.doSomething();
  }
}
