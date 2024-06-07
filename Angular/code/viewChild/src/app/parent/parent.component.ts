import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild(ChildComponent) count!: ChildComponent
  c = 0;
  name=""
  ngAfterViewInit()
  {
    this.c = this.count.c;
    this.name= this.count.name
  }
  
}
