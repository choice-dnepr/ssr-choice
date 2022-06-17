import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateBrandComponent } from '@view/modules/create-brand/create-brand.component';

import { StoreManagerComponent } from './store-manager.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: StoreManagerComponent,
      children: [
        {
          path: 'brand-list',
          loadChildren: () => import('../../modules').then(m => m.BrandListModule)
        },
        {
          path: 'create-brand',
          loadChildren: () => import('../../modules').then(m => m.CreateBrandModule)
        }]
    }
  ])],
  exports: [RouterModule],
})
export class StorePageRouting { }
