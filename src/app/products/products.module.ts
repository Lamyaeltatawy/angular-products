import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ProductsModule { }
