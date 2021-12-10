import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainPageRouting } from './main-routing.module';
import { SharedModule } from '@view/shared/shared.module';
import { PresentSectionModule } from '@view/modules/present-section/present-section.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainPageRouting,
    SharedModule,
    PresentSectionModule
  ],
  entryComponents: [
    MainComponent
  ]
})
export class MainModule { }