import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import {
  ChoiceButtonComponent,
  MiniSmartPhotoSwiperComponent,
  ResponsiveImageComponent,
  SectionTitleComponent
} from './components';

import {
  DesignateDirective
} from './directives';


@NgModule({
  declarations: [
    ResponsiveImageComponent,
    MiniSmartPhotoSwiperComponent,
    ChoiceButtonComponent,
    SectionTitleComponent,
    DesignateDirective
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    ResponsiveImageComponent,
    MiniSmartPhotoSwiperComponent,
    ChoiceButtonComponent,
    SectionTitleComponent,
    DesignateDirective
  ]
})
export class SharedModule {}