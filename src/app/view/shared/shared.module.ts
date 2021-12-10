import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import {
  ChoiceButtonComponent,
  MiniSmartPhotoSwiperComponent,
  ResponsiveImageComponent
} from './components';


@NgModule({
  declarations: [
    ResponsiveImageComponent,
    MiniSmartPhotoSwiperComponent,
    ChoiceButtonComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    ResponsiveImageComponent,
    MiniSmartPhotoSwiperComponent,
    ChoiceButtonComponent
  ]
})
export class SharedModule {}