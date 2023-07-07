import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DxButtonModule, DxTabsModule } from 'devextreme-angular';
import { PagingHeaderComponent } from './paging-header/paging-header.component';



@NgModule({
  declarations: [
    PagingHeaderComponent
  ],
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
    PagingHeaderComponent
  ],
})
export class SharedModule {}
