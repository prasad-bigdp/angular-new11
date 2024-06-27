import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatGridListModule,MatFormFieldModule,MatInputModule],
  exports: [CommonModule, MatButtonModule, MatCardModule, MatGridListModule,MatFormFieldModule,MatInputModule],
})
export class MaterialModule {}
