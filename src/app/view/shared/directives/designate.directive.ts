import { Directive, ElementRef, Input } from '@angular/core';


 
@Directive({
    selector: '[designate]'
})
export class DesignateDirective {

  @Input() designate: string = "designated-words";

  @Input()
    set designateWords(values: string[]) {
      const childText: string = this.elementRef.nativeElement.innerHTML;
      const startNode = this.elementRef.nativeElement.childNodes;
      const splitedText = childText?.split(' ');

      const nodeValues = values.map(value => {
        const newNode = document.createElement('span');
        const textNode = document.createTextNode(value + ' ');
        newNode.appendChild(textNode);
        newNode.setAttribute('class', 'designated-words');
        return newNode;
      });

    
      const newSentence = splitedText.map(word => {
        const newWord = word + ' ';
        const findedNode = nodeValues.find(node => node.innerHTML === newWord);
        return findedNode || document.createTextNode(newWord);
      });

      if (this.elementRef.nativeElement && this.elementRef.nativeElement.replaceChildren) this.elementRef.nativeElement.replaceChildren(...newSentence);
    }
     
  constructor(private elementRef: ElementRef) {}
}