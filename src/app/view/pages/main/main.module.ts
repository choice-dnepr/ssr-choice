import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainPageRouting } from './main-routing.module';
import { SharedModule } from '@view/shared/shared.module';
import { AboutCompanyModule, PresentSectionModule } from '@view/modules';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainPageRouting,
    SharedModule,
    PresentSectionModule,
    AboutCompanyModule
  ],
  entryComponents: [
    MainComponent
  ]
})
export class MainModule { }
