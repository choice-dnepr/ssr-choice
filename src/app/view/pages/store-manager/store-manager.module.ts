import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreManagerComponent } from './store-manager.component';
import { StorePageRouting } from './store-manager-routing.module';
import { SharedModule } from '@view/shared/shared.module';
import { CreateBrandModule, CreateProductModule } from '@view/modules';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreManagerService } from '@core/services';


@NgModule({
  declarations: [
    StoreManagerComponent
  ],
  providers: [
    StoreManagerService
  ],
  imports: [
    CommonModule,
    StorePageRouting,
    SharedModule,
    CreateBrandModule,
    CreateProductModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    StoreManagerComponent
  ]
})
export class StoreManagerModule { }
