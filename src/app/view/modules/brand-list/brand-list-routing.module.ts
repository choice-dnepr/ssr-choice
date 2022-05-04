import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrandListComponent } from './brand-list.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: BrandListComponent,
    }
  ])],
  exports: [RouterModule],
})
export class BrandListRouting { }
