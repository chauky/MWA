import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class DbService {

  constructor(public http: HttpClient) { }
  getName(){
    return this.http.get("http://jsonplaceholder.typicode.com/users/1");
  }

  getPost(){
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1");
  }
}
