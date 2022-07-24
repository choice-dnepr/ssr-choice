import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateProductComponent } from './containers/create-product/create-product.container';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: CreateProductComponent,
    }
  ])],
  exports: [RouterModule],
})
export class CreateProductRouting { }
