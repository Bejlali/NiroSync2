import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyhomeComponent } from './myhome.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MyhomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ]
})
export class HomeModule { }
