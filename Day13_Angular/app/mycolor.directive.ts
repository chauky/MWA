import { Output, HostListener, ElementRef, Directive, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appMycolor]'
})

export class MycolorDirective {
  colors = ['red', 'green', 'blue', 'yellow'];
  @Output() emitColor = new EventEmitter;
  constructor(private elRef: ElementRef) {

  }

  @HostListener('click') onclick() {
    var cl = Math.floor((Math.random() * 4) + 1);
    this.changeColor(this.colors[cl])
    
  }

  private changeColor(color: string) {
    this.elRef.nativeElement.style.color = color;
    this.emitColor.emit(color)
  }

}
