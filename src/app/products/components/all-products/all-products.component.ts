import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products:any[] = [];
  categories:any[] = [];
  constructor(private service:ProductsService ) { }
  ngOnInit(): void {
    this.getProducts()
    this.getCategory()
  }
getProducts(){
  this.service.getAllProducts().subscribe((res:any)=>
  {this.products=res},(error)=>{alert(error.message)})
}
getCategory(){
  this.service.getCategories().subscribe((res:any)=>
  {this.categories=res},(error)=>{alert(error.message)})
}
filterCategory(event:any){
let value= event.target.value;
this.getProductByCategory(value)
}
getProductByCategory(keyWard:string){
  this.service.getProductByCategory(keyWard).subscribe((res:any)=>
    {
      this.products=res
    })
}
}
