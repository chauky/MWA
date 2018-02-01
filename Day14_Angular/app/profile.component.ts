import { Component, OnInit } from '@angular/core';
import { DbService } from "./db.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private data;
  public id;
  public name;
  public email;
  public stuID;

  constructor(private dbservice: DbService, route: ActivatedRoute) {
    route.params.subscribe(params => {this.id= params['id']});
    this.data = this.dbservice.getData();
    this.name = this.data[this.id - 1]['name'];
    this.stuID = this.data[this.id - 1]['stuID']
    this.email = this.data[this.id - 1]['email'];
  }
  ngOnInit() {
  }

}
