import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];


  /**
   *
   */
  constructor(private ShopService: ShopService) {

  }


  ngOnInit(): void {
    this.ShopService.getProducts().subscribe({
      next: (response) => (this.products = response.data),
      error: (error) => console.log(error),
    });
  }
}
