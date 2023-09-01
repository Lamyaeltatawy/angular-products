import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getProductByCategory(keyWard: string) {
    return this.http.get('https://fakestoreapi.com/products/category/'+keyWard);
  }
  getProductsById(id: any) {
    return this.http.get('https://fakestoreapi.com/products/'+id);

  }
}
