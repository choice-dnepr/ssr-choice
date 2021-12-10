import { Component, Input } from '@angular/core';


@Component({
  selector: 'choice-btn',
  templateUrl: './choice-btn.component.html',
  styleUrls: ['./choice-btn.component.scss']
})
export class ChoiceButtonComponent {

  @Input() text: string = '';
}
