import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DxButtonModule, DxTabsModule } from 'devextreme-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    DxTabsModule,
    DxButtonModule,
    DxTabsModule,
  ],
  exports: [
    PaginationModule,
    TabsModule,
    DxTabsModule,
    DxButtonModule,
    DxTabsModule,
  ],
})
export class SharedModule {}
