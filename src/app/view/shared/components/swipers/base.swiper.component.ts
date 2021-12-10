import { Component } from '@angular/core';
import SwiperCore, { A11y, Autoplay, Controller, Navigation, Pagination, Scrollbar, SwiperOptions, Thumbs, Virtual, Zoom } from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);


@Component({ template: '' })
export class BaseSwiperComponent {
  config: SwiperOptions;

  constructor() {
    this.config = {
      slidesPerView: 2,
      spaceBetween: 4,
      autoplay: {
        delay: 5000,
        
      },
      // navigation: true,
      // pagination: { clickable: true },
      scrollbar: { draggable: true },
    };
  }


  onSwiper(event: any) {
    console.log(event);
  }

  onSlideChange() {
    console.log('tick');
  }
}