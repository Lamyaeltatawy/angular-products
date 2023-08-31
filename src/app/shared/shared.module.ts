import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AllProductsComponent,

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
