import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
   items:any[]=[]
  constructor(private c: CartService)
  {
    
  }
  ngOnInit()
  {
this.c.cartItemsSubject.subscribe((i) => (this.items = i));
  }
}
