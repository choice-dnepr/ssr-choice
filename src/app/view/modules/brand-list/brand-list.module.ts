import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@view/shared/shared.module';
import { BrandListComponent } from './brand-list.component';
import { BrandListRouting } from './brand-list-routing.module';



@NgModule({
  declarations: [
    BrandListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrandListRouting
  ],
  exports: [
    BrandListComponent
  ]
})
export class BrandListModule { }
