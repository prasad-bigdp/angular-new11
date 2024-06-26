import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any[]=[]
  constructor(private api:ApiService,private route:Router,private c:CartService)
  {
    this.api.getProducts().subscribe(
      (res:any) => this.products = res.products
    )
  }
  goProduct(id:number)
  {
    this.route.navigate([`products/${id}`])
  }
  cartAdd(pro:any)
  {
     this.c.addItem(pro)
  }

}
