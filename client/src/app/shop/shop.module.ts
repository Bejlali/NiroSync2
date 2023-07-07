import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { DxButtonModule, DxTabsModule } from 'devextreme-angular';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  declarations: [ShopComponent, ProductItemComponent],
  imports: [
    CommonModule,
    DxTabsModule,
    TabsModule.forRoot(),
    DxTabsModule,
    DxButtonModule
  ],

  exports: [ShopComponent],
})
export class ShopModule {}
