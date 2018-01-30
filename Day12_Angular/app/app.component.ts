import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public ComponentCounterValue = 0;

  showOutputData(data){
    this.ComponentCounterValue = data;
  }
}
