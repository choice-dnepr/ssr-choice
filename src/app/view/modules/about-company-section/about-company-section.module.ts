import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@view/shared/shared.module';
import { AboutCompanyComponent } from './about-company-section.component';



@NgModule({
  declarations: [
    AboutCompanyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AboutCompanyComponent
  ]
})
export class AboutCompanyModule { }
