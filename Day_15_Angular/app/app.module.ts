import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form.component';
import { DbService } from './db.service';
import { ThankyouComponent } from './thankyou.component';

const MY_ROUTS: Routes = [
  { path: '', component: DataFormComponent },
  { path: 'thankyou', component: ThankyouComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    ThankyouComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(MY_ROUTS)

  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
