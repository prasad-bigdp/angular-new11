import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isHide = false;
  isRed = true;
  fs = '48px';
  redorblack = false;
  isVisible = true;
  isVisible2 = true;

  change2() {
    this.isVisible = this.isVisible ? false : true;
  }
  change() {
    this.isHide = this.isHide ? false : true;
    this.isRed = this.isRed ? true : false;
  }
}
