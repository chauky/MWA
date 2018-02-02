import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  ReactiveFormsModule
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { DbService } from "./db.service";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent{

  myForm: FormGroup;
  private data1: any;
  private data2: any;

  constructor(private formBuilder: FormBuilder, private dbservice: DbService, private router: Router) {
    this.myForm = formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'post': new FormControl('', [Validators.required, this.lengthValidator]),

    });
  };

  lengthValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value.length < 10) return { error: true };
    return null;
  }

  getData() {
    this.dbservice.getName().subscribe(res => {
      this.data1 = res
      this.myForm.controls['name'].setValue(this.data1['name']);
      this.myForm.controls['email'].setValue(this.data1['email']);

    });
    this.dbservice.getPost().subscribe(res => {
      this.data2 = res
      this.myForm.controls['post'].setValue(this.data2[0].body);
    });
  }

  printData() {
    console.log(this.myForm)
    this.onNavigate();
  }
  onNavigate() {
    this.router.navigate(['thankyou']);;
  }
