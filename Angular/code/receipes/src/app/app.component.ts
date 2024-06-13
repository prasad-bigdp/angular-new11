import { Component } from '@angular/core';
import { ReceipeDataService } from './receipe-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'receipes';
  count: number;
  receipes: any;
  constructor(private rd:ReceipeDataService)
  {
    this.count = this.rd.c;
    this.rd.getData().subscribe((res) => (this.receipes = res));
    
  }
}
