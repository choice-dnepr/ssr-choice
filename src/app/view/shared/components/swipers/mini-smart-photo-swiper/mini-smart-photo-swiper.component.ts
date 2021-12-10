import { Component, Input } from '@angular/core';
import { SmartImage } from '@core/models/shared';
import { BaseSwiperComponent } from '../base.swiper.component';


@Component({
  selector: 'mini-smart-photo-swiper',
  templateUrl: './mini-smart-photo-swiper.component.html',
  styleUrls: ['./mini-smart-photo-swiper.component.scss']
})
export class MiniSmartPhotoSwiperComponent extends BaseSwiperComponent {

  @Input() photoSet: SmartImage[] = [];
}
