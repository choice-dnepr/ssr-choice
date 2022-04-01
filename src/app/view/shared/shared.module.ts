import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import {
  ChoiceButtonComponent,
  MiniSmartPhotoSwiperComponent,
  OrderBlockComponent,
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
    OrderBlockComponent,
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
    OrderBlockComponent,
    DesignateDirective
  ]
})
export class SharedModule {}