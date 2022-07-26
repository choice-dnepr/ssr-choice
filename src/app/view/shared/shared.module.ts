import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { MatButtonModule } from '@angular/material/button';

import {
  ChoiceButtonComponent,
  MiniSmartPhotoSwiperComponent,
  NavigationItemComponent,
  OrderBlockComponent,
  ResponsiveImageComponent,
  SectionTitleComponent,
  FileUploadComponent
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
    DesignateDirective,
    NavigationItemComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ResponsiveImageComponent,
    MiniSmartPhotoSwiperComponent,
    ChoiceButtonComponent,
    SectionTitleComponent,
    OrderBlockComponent,
    DesignateDirective,
    NavigationItemComponent,
    FileUploadComponent
  ]
})
export class SharedModule {}