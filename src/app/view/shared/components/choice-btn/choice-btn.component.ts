import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'choice-btn',
  templateUrl: './choice-btn.component.html',
  styleUrls: ['./choice-btn.component.scss']
})
export class ChoiceButtonComponent {

  @Input() text: string = '';
  @Input() type: string = 'button';
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  onClick(event: any) {
    this.clickEvent.emit();
  }
}
