import { Component, Input } from '@angular/core';
import { SmartImage } from '@core/models/shared';


@Component({
  selector: 'responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss']
})
export class ResponsiveImageComponent {


  @Input() imageData: SmartImage = {} as SmartImage;
  @Input() withBorder: boolean = false;

}
