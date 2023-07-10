import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuardService } from '../shared/services';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProductDetailsComponent,
    data: {breadcrumb: {alias: 'productDetails'}},
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    component: ShopComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
