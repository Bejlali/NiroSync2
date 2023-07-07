import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/Pagination';
import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';






@Injectable({
  providedIn: 'root',
  //providedIn: ShopModule
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  //create get method for service
 // getProducts(brandId?: number, typeId?: number, sort? : string) {
  getProducts(ShopParams : ShopParams) {
    let params = new HttpParams();
    if (ShopParams.brandId > 0) params = params.append('brandId', ShopParams.brandId);
    if (ShopParams.typeId ) params = params.append('typeId', ShopParams.typeId);
    //if (ShopParams.sort) params = params.append('sort', ShopParams.sort);
    params = params.append('sort', ShopParams.sort);
    params = params.append('pageIndex', ShopParams.pageNumber);
    params = params.append('pageSize', ShopParams.pageSize);

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
