import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/Pagination';
import { Product } from '../shared/models/product';






@Injectable({
  providedIn: 'root',
  //providedIn: ShopModule
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}



  //create get method for service
  getProducts() {
    return this.http.get<Pagination<Product[]>>(
      this.baseUrl + 'products?pageSize=30'
    );
  }
}
