import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];
/*   brandIdSelected = 0;
  typeIdIdSelected = 0;
  sortSelected = 'name'; */
  ShopParams = new ShopParams();
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to high', value: 'priceAsc' },
    { name: 'Price: High to low', value: 'priceDesc' },

  ];
  totalCount = 0;

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
      this.ShopParams
      // this.brandIdSelected,
      // this.typeIdIdSelected,
      // this.sortSelected,
    ).subscribe({
     // next: (response) => (this.products = response.data),
      next: (response) => {
        this.products = response.data;
        this.ShopParams.pageNumber = response.pageIndex;
        this.ShopParams.pageSize = response.pageSize;
        this.totalCount = response.count;

      },
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
    //this.brandIdSelected = brandId;
    this.ShopParams.brandId = brandId;
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    //this.typeIdIdSelected = typeId;
    this.ShopParams.typeId = typeId;
    this.getProducts();
  }
  onSortSelected(event: any) {
    //this.sortSelected = event.target.value;
    this.ShopParams.sort = event.target.value;
    this.getProducts();

  }
  onPageChanged(event: any) {
    if (this.ShopParams.pageNumber !== event) {
      this.ShopParams.pageNumber = event.page;
      this.getProducts();
    }


  }
}
