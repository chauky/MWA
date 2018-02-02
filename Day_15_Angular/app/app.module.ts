import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form.component';
import {DbService} from './db.service';



@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    
    
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,HttpClientModule
    
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
