import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/Pagination';
import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';






@Injectable({
  providedIn: 'root',
  //providedIn: ShopModule
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  //create get method for service
  getProducts(brandId?: number, typeId?: number, sort? : string) {
    let params = new HttpParams();
    if (brandId) params = params.append('brandId', brandId);
    if (typeId) params = params.append('typeId', typeId);
    if (sort) params = params.append('sort', sort);

    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {
     // params : params, we can change it to just params because params is equel to params
      params
    });
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }
}
