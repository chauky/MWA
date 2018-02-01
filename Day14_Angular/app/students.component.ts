import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DbService } from "./db.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [DbService]
})
export class StudentsComponent implements OnInit {
  private data;
  public id;
  public name;
  public link = "";


  ngOnInit() {
   // this.data = this.dbservice.getData();
  }
  constructor(private dbservice: DbService) {
    this.data = this.dbservice.getData();
    this.id = this.data[0]['_id'];
    this.name = this.data[0]['name'];
    //this.link = "<ul><li><a href=" + this.id + ">" + this.name+ "</a></li></ul>";

  }

}
