import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@view/shared/shared.module';
import { CompanyToolsComponent } from './company-tools-section.component';



@NgModule({
  declarations: [
    CompanyToolsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CompanyToolsComponent
  ]
})
export class CompanyToolsModule { }
