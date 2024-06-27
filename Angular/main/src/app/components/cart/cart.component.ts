import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items: any[] = [];
  total: number = 0;
  constructor(private c: CartService)
  {
    
  }
  ngOnInit()
  {
    this.c.cartItemsSubject.subscribe((i) => (this.items = i));
    this.calculateTotal()
  }
  deleteItem(i: number)
  {
    this.c.removeItem(i);
    this.calculateTotal()
  }
  calculateTotal()
  {
        this.total = this.items.reduce((pre, cur) => pre + cur.price, 0);

  }
}
