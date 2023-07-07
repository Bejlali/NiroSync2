import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];

  /**
   *
   */
  constructor(private ShopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();

  }


  getProducts() {
   this.ShopService.getProducts().subscribe({
     next: (response) => (this.products = response.data),
     error: (error) => console.log(error),
   });
  }
  getBrands() {
    this.ShopService.getBrands().subscribe({
      next: (response) => (this.brands = response),
      error: (error) => console.log(error),
    });
  }
  getTypes() {
    this.ShopService.getTypes().subscribe({
      next: (response) => (this.types = response),
      error: (error) => console.log(error),
    });
  }
}
