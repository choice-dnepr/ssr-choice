import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipHeaderComponent } from './ship-header.component';
import { SharedModule } from '@view/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShipHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ShipHeaderComponent
  ]
})
export class ShipHeaderModule { }
