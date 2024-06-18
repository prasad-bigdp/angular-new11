import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  number = 25;
  name = "PRASAD"
  dt = new Date();
  price = 100;
  tax = 24.9988;
  title = "bahubali"
  result: any;
  x:any
  constructor(private hc: HttpClient)
  {
     this.result = this.hc.get('https://fakestoreapi.com/products');
  }
  obj = {
    name: "raj",
    age: 25,
  }
}
