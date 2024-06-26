import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from '../components/products/products.component';
const materialComponents = [
  MatCardModule,
  MatButtonModule
]


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
