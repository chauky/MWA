import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from "@angular/router";
import { NgModule } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyGuardGuard} from './my-guard.guard';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';
import { ProfileComponent } from './profile.component';
import { DbService } from "./db.service";
import { ErrorComponent } from './error.component';

const MY_ROUTES: Routes=[
  { path: 'home', component: HomeComponent },
  {path: 'myerror', component: ErrorComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'profile/:id', component: ProfileComponent, canActivate:[MyGuardGuard] },
  { path: 'error', redirectTo: 'myerror' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [DbService,MyGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
