# Data Binding
## Angular Data Binding Example

  1. Interpolation: One-way binding to display a greeting message.
  2. Event Binding: One-way binding to trigger a method on button click.
  3. Property Binding: One-way binding to synchronize input field value with a component property.
  4. Two-way Binding: Bidirectional binding to update input field value and component property simultaneously.

### app.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting: string = 'Hello, World!';
  userInput: string = ''; // Property for two-way binding

  changeGreeting() {
    this.greeting = 'Hello, Angular!';
  }
}
```

Code Explanation:

- We define the AppComponent class with two properties: greeting and userInput.
- The changeGreeting() method updates the greeting property when called.
  


### HTML File
``` html
<div>
  <!-- Interpolation: One-way binding to display the value of 'greeting' -->
  <h1>{{ greeting }}</h1>
  
  <!-- Event Binding: Call 'changeGreeting()' method on button click -->
  <button (click)="changeGreeting()">Change Greeting</button>

  <!-- Property Binding: Bind 'userInput' property to input value -->
  <input type="text" [value]="userInput" (input)="userInput = $event.target.value" placeholder="Enter your name">

  <!-- Two-way Binding: Bind 'userInput' property both ways -->
  <input type="text" [(ngModel)]="userInput" placeholder="Enter your name">
</div>

```

HTML Template Explanation:

- Interpolation ({{ greeting }}) displays the value of the greeting property.
- Event binding ((click)="changeGreeting()") triggers the changeGreeting() method on button click.
- Property binding ([value]="userInput") synchronizes the input field value with the userInput property.
- Two-way binding ([(ngModel)]="userInput") enables bidirectional data flow between the input field and the userInput property.
  

  ## Types of Data Binding in Angular

### 1 - Interpolation (One-Way Binding)
**Description:** Interpolation allows you to display dynamic data from the component class in the HTML template.

Syntax: {{ expression }}

Example:

```html
<h1>{{ greeting }}</h1>
```
Documentation: Interpolation is used for one-way binding, where the data flows from the component class to the template. It dynamically updates the displayed value whenever the data in the component class changes.

### 2 - Event Binding (One-Way Binding)

**Description:** Event binding enables you to respond to user events (e.g., button clicks) in the HTML template and trigger methods defined in the component class.

Syntax: (event)="handler()"

Example:
```html
<button (click)="changeGreeting()">Change Greeting</button>
```
Documentation: Event binding is used for one-way binding, where events in the template trigger actions in the component class. It allows you to create interactive user interfaces by responding to user interactions.

### 3 - Property Binding (One-Way Binding)
**Description:** Property binding allows you to set an HTML element's property value dynamically based on data from the component class.

Syntax: [property]="expression"

Example:
```html
<input type="text" [value]="userInput">
```
Documentation: Property binding is used for one-way binding, where the data flows from the component class to the template. It dynamically sets properties of HTML elements based on component data.

### 4 - Two-Way Binding
**Description:** Two-way binding enables bidirectional data flow between an HTML element and a component property, allowing updates in either the template or the component class to automatically reflect in the other.

Syntax: [(ngModel)]="property"

Example:
```html
<input type="text" [(ngModel)]="userInput">
```

Documentation: Two-way binding combines property binding and event binding, facilitating real-time synchronization between input fields and component properties. It simplifies form handling and user input management.

