import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StorePageRouting } from './store-routing.module';
import { SharedModule } from '@view/shared/shared.module';


@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    StorePageRouting,
    SharedModule
  ],
  entryComponents: [
    StoreComponent
  ]
})
export class StoreModule { }
