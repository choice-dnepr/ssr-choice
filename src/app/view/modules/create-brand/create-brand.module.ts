import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@view/shared/shared.module';
import { CreateBrandComponent } from './create-brand.component';
import { CreateBrandRouting } from './create-brand-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CreateBrandComponent
  ],
  imports: [
    CommonModule,
    CreateBrandRouting,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CreateBrandComponent
  ]
})
export class CreateBrandModule { }
