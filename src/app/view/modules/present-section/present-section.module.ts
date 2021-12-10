import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@view/shared/shared.module';
import { PresentSectionComponent } from './present-section.component';
import { PresentationMockService } from '@core/mocks';



@NgModule({
  declarations: [
    PresentSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    PresentationMockService
  ],
  exports: [
    PresentSectionComponent
  ]
})
export class PresentSectionModule { }
