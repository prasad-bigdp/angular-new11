import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatGridListModule],
  exports: [CommonModule, MatButtonModule, MatCardModule, MatGridListModule],
})
export class MaterialModule {}
