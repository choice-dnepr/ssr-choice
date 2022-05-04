import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreManagerComponent } from './store-manager.component';
import { StorePageRouting } from './store-manager-routing.module';
import { SharedModule } from '@view/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateBrandModule } from '@view/modules';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    StoreManagerComponent
  ],
  imports: [
    CommonModule,
    StorePageRouting,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    CreateBrandModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    StoreManagerComponent
  ]
})
export class StoreManagerModule { }
