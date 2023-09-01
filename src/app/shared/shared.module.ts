import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AllProductsComponent,
    SpinnerComponent,
    SelectComponent,

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
  ]
})
export class SharedModule { }
