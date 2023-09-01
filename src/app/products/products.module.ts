import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    ProductsDetailsComponent,
    // AllProductsComponent,
    ProductComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ProductsModule { }
