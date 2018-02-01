import { Injectable } from '@angular/core';

@Injectable()

export class DbService {

  private data = [{ _id: '1', name: 'Asaad Saad', stuID: '123443', email:'asaad@mum.edu'},
  { _id: '2', name: 'Ky', stuID: '123443', email:'cknguyen@mum.edu'},
  { _id: '3', name: 'ABC', stuID: '123443', email:'abc@mum.edu'}];
  constructor() { }
  
  getData(){
    return this.data;
  }

}
