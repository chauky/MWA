import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {
  public counterValue;
  @Input() counter: number;
  @Output() counterChange = new EventEmitter();


  emitCounter() {
    this.counterChange.emit(this.counterValue);
  }

  constructor() {

    this.emitCounter();
  }

  ngOnInit() {
    this.counterValue = this.counter;
    
  }
  plus() {
    
    this.counterValue = this.counterValue + 1;
    this.emitCounter();
    return false;
  }

  minus() {
    
    this.counterValue = this.counterValue - 1;
    this.emitCounter();
    return false;
  }
}
