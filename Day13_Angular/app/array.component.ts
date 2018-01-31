import { Component, Renderer, ElementRef, OnInit, Input,Directive } from '@angular/core';


@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],

})

export class ArrayComponent implements OnInit {
  @Input() arrayString:string[];

  constructor() {

   }
 
  ngOnInit() {
  }

}
