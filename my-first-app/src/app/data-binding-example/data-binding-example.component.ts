import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrl: './data-binding-example.component.css'
})
export class DataBindingExampleComponent {
  // Define a property to bind to
  greeting: string = 'Hello, World!';
  userInput: string = '';

  // Define a method to handle button click event
  changeGreeting() {
    this.greeting = 'Hello, Angular!';
  }


}
