import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DbService } from "./db.service";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: []
})
export class StudentsComponent implements OnInit {
  public data:any[];
  ngOnInit() {
   // this.data = this.dbservice.getData();
  }
  constructor(private dbservice: DbService, private routes: ActivatedRoute) {
    this.data = this.dbservice.getData();
  }

}
