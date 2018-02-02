import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  ReactiveFormsModule
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'name': new FormControl('',[Validators.required]),
      'email': new FormControl('',[Validators.required]),
      'post': new FormControl('',[Validators.required])
      
  });
   };

  ngOnInit() {
  }

}
