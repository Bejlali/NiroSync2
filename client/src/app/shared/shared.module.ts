import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DxButtonModule, DxTabsModule } from 'devextreme-angular';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { PagerComponent } from './pager/pager.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';



@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    DxTabsModule,
    DxButtonModule,
    ButtonsModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    TabsModule,
    DxTabsModule,
    DxButtonModule,
    ButtonsModule
  ],
})
export class SharedModule {}
