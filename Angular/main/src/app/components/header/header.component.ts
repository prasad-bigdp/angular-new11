import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  count: any;
  constructor(private c: CartService) {
      this.c.cartCountSubject.subscribe((res) => (this.count = res)); 
  }
  ngOnInit(): void {
       this.count= this.c.getCount()
  }
}
