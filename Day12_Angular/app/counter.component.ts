import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {
  public counterValue;
  @Input() counter:number;
  @Output() counterChange = new EventEmitter();


  emitCounter(){
    this.counterChange.emit(this.counterValue);
  }

  constructor() {
    this.counterValue = 0;
    this.emitCounter();
    }

  plus() {
    this.counterValue = this.counterValue + 1;
    return false;
  }

  minus() {
    this.counterValue = this.counterValue - 1;
    return false;
  }
}
