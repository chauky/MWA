import { Component } from '@angular/core';


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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  private data1:any;
  private data2:any;
  public name:string="";
  public email:string="";
  public post: string="";

  constructor(private formBuilder: FormBuilder, private dbservice: DbService) {
    this.myForm = formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'post': new FormControl('', [Validators.required, this.lengthValidator]),
     
    });
    this.dbservice.getName().subscribe(res => {
      this.data1 = res
    });
    this.dbservice.getPost().subscribe(res => {
      this.data2 = res
    });
  };

  lengthValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value.length < 10) return { error: true };
    return null;
  }

  getData() {
    this.name = this.data1['name'];
    this.email = this.data1['email'];
    this.post = this.data2[0].body;
  }
}
