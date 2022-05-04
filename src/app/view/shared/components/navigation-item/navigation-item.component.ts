import { Component, Input } from '@angular/core';
import { NavigationItem } from '@core/models';


@Component({
  selector: 'navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent {

  @Input() item: NavigationItem = {} as NavigationItem;
}
