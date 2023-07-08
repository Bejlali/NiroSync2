import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyhomeComponent } from './myhome.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [MyhomeComponent],
  imports: [CommonModule, CoreModule],
  exports: [MyhomeComponent],
})
export class PubhomeModule {}
