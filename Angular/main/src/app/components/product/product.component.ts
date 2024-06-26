import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  id!: number;
  product: any;
  constructor(private r:ActivatedRoute,private api:ApiService,private c:CartService)
  {
    this.r.params.subscribe((p) => this.id = p[ 'id' ])
    this.api.getProduct(this.id).subscribe((res)=>this.product=res)
  }
  addCart(pro:any)
  {
    this.c.addItem(pro)
  }
}
