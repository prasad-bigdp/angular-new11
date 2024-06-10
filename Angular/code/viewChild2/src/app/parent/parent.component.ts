import {
  Component,
  ViewChild
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  pvalue = ''
  value = '';
  c=''
  @ViewChild(ChildComponent) child!: ChildComponent;
  sendToChild() {
    this.value = this.pvalue
    this.pvalue=''
  }
  receive()
  {
    this.child.sendToParent();
    this.c = this.child.val
    console.log(this.c)
  }
}
