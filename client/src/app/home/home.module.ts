import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyhomeComponent } from './myhome.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [MyhomeComponent],
  imports: [CommonModule, SharedModule, CarouselModule.forRoot()],
})
export class HomeModule {}
