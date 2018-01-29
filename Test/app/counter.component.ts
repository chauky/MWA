import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter:number;
  public counterValue;


  constructor() {
    this.counterValue = 0;
  }

  ngOnInit() {
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
