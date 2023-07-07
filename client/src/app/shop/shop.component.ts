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
  brandIdSelected = 0;
  typeIdIdSelected = 0;
  sortSelected = 'name';
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to high', value: 'priceAsc' },
    { name: 'Price: High to low', value: 'priceDesc' },

  ];

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
    //this.ShopService.getProducts().subscribe({
    this.ShopService.getProducts(
      this.brandIdSelected,
      this.typeIdIdSelected,
      this.sortSelected,
    ).subscribe({
      next: (response) => (this.products = response.data),
      error: (error) => console.log(error),
    });
  }
  getBrands() {
    this.ShopService.getBrands().subscribe({
      //next: (response) => (this.brands = response),
      next: (response) => (this.brands = [{ id: 0, name: 'All' }, ...response]),
      error: (error) => console.log(error),
    });
  }
  getTypes() {
    this.ShopService.getTypes().subscribe({
      // next: (response) => (this.types = response),
      next: (response) => (this.types = [{ id: 0, name: 'All' }, ...response]),
      error: (error) => console.log(error),
    });
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    this.typeIdIdSelected = typeId;
    this.getProducts();
  }
  onSortSelected(event: any) {
    this.sortSelected = event.target.value;
    this.getProducts();

  }
}
