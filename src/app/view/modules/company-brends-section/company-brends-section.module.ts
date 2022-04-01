import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@view/shared/shared.module';
import { CompanyBrendsComponent } from './company-brends-section.component';



@NgModule({
  declarations: [
    CompanyBrendsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CompanyBrendsComponent
  ]
})
export class CompanyBrendsModule { }
