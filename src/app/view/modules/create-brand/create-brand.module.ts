import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@view/shared/shared.module';
import { CreateBrandComponent } from './create-brand.component';
import { CreateBrandRouting } from './create-brand-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CreateBrandComponent
  ],
  imports: [
    CommonModule,
    CreateBrandRouting,
    SharedModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CreateBrandComponent
  ]
})
export class CreateBrandModule { }
