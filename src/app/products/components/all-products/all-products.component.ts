import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  isLoading: boolean = false;
  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
  }
  getProducts() {
    this.isLoading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.isLoading = false;
        this.products = res;
      },
      (error) => {
        this.isLoading = false;
        alert(error.message);
      }
    );
  }
  getCategory() {
    this.isLoading=true;
    this.service.getCategories().subscribe(
      (res: any) => {
        this.isLoading=false;
        this.categories = res;
      },
      (error) => {
        this.isLoading=false;
        alert(error.message);
      }
    );
  }
  filterCategory(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      this.getProducts();
    } else {
      this.getProductByCategory(value);
    }
    // this.getProductByCategory(value)
  }
  getProductByCategory(keyWard: string) {
    this.isLoading=true;
    this.service.getProductByCategory(keyWard).subscribe((res: any) => {
      this.isLoading=false;
      this.products = res;
    });
  }
}
