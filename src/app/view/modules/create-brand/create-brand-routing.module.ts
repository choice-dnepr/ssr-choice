import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateBrandComponent } from './create-brand.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: CreateBrandComponent,
    }
  ])],
  exports: [RouterModule],
})
export class CreateBrandRouting { }
