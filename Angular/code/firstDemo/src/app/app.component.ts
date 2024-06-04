import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // name = 'prasad';
  // rollno = 25;
  // marks = 85;
  // rank = 55;
  // url =
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvISWV--yWSsHVx9MeoMlK8a_iawaZDX9Bg&s';
  // isDisable = false
  // fun()
  // {
  //   alert("helolllllooooooooooo")
  // }

  count = 0;
  isDisable = this.count ? false : true;
  incr()
  {
    this.count++
  }
  decr()
  {
    if (this.count == 0) {
      this.isDisable = true; 
    }
    else {
        this.count--;
    }
  
  }
  reset()
  {
    this.count=0
  }






}
