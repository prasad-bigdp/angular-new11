import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];
  cartItemsSubject;
  cartCountSubject;
  count: number = 0;
  constructor() {
    this.cartItemsSubject = new BehaviorSubject<any[]>([]);
    this.cartCountSubject = new BehaviorSubject(0);
  }
  addItem(item: any) {
    this.cartItems.push(item);
    this.count++;
    this.cartCountSubject.next(this.count);
    this.cartItemsSubject.next([...this.cartItems]);
  }
  getCount() {
    return this.cartCountSubject.getValue();
  }
  getItems() {
    return this.cartItemsSubject.getValue();
  }
}
