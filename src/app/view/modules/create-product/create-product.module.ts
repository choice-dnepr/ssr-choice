import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@view/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { CreateProductComponent } from './containers/create-product/create-product.container';
import { CreateProductRouting } from './create-product-routing.module';
import { ProductImgUploadComponent } from './components/product-img-upload/product-img-upload.component';


@NgModule({
  declarations: [
    CreateProductComponent,
    ProductImgUploadComponent
  ],
  imports: [
    CommonModule,
    CreateProductRouting,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    CreateProductComponent
  ]
})
export class CreateProductModule { }
