import { Component, Input } from '@angular/core';


@Component({
  selector: 'order-block',
  templateUrl: './order-block.component.html',
  styleUrls: ['./order-block.component.scss']
})
export class OrderBlockComponent {
  _order: string = "";

  @Input() set order(value: number) {
   this._order = `0${value}`;
  };

  @Input() text: string = "";
}
