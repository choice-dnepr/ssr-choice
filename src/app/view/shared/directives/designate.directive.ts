import { Directive, ElementRef, Input } from '@angular/core';


 
@Directive({
    selector: '[designate]'
})
export class DesignateDirective {
  private readonly NODE_TEXT_NAME = "#text";

  @Input() designate: string = "";

  @Input()
    set designateWords(values: string[]) {
      const childNodes: NodeList = this.elementRef.nativeElement.childNodes;
      const designateNodes: any[] = [];
      const designateWordList: any = {};
  
      for (let i = 0; childNodes.length > i; i++) {
        const node = childNodes[i];
  
        if (node.nodeName && node.nodeName === this.NODE_TEXT_NAME) {
          const isIncluded = values.some(value => node.nodeValue?.includes(value));
          const spltedValues = node.nodeValue?.split(" ");
          const designateWord = spltedValues?.find(value => values.includes(value));
          isIncluded && designateNodes.push(spltedValues);
          designateWordList[i] = designateWord;
        } else {
          designateNodes.push([]);
          designateWordList[i] = 'none';
        }
        // this.elementRef.nativeElement.removeChild(node);
      }

      const designatedNode = designateNodes.reduce((acc, value, id) => {
        
        const valueString = value.length ? value.join(" ") : "";
        const splittedNodes = valueString.split(designateWordList[id])
        //.filter((value: string) => !!value);
        debugger
        // const span = document.createElement('span');
        // span.innerText = value;
        // acc.push(span);
        return acc;
      }, [] as any[]);

      // const spanList = values.reduce((acc, value) => {
      //   const node = document.createElement('span');
      //   node.innerText = value;
      //   acc.push(node);
      //   return acc;
      // }, [] as any[]);

      //document.createTextNode("Hello World");
    }
     
  constructor(private elementRef: ElementRef) {}


  
}