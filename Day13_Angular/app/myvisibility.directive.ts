import { Input, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Myvisibility]'
})
export class MyvisibilityDirective {
  @Input() set Myvisibility(condition: boolean) {
    if (condition) {
      this.elRef.nativeElement.style.visibility = "none"
    } else {
      this.elRef.nativeElement.style.visibility = "hidden"
    }
  }

  constructor(private elRef: ElementRef) {
    //this.elRef.nativeElement.style.visibility = this.Myvisibility
  }
}

