import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contentVisible = false;
  buttonClicks = [];
  counter = 0;

  toggleDetails(){
    this.contentVisible = !this.contentVisible;
    this.buttonClicks.push(this.buttonClicks.length + 1);
    console.log(this.buttonClicks);
  }
}
