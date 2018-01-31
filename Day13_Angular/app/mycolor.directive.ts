import {HostListener, ElementRef,Directive } from '@angular/core';


@Directive({
  selector: '[appMycolor]'
})

export class MycolorDirective {
  colors = ['red', 'green', 'blue', 'yellow'];
  constructor(private elRef: ElementRef) { }

  @HostListener('click') onclick(){
    var cl = Math.floor((Math.random() * 4) + 1);
    this.changeColor(this.colors[cl])
  }

  private changeColor(color: string){
    this.elRef.nativeElement.style.color= color;
  }

}
