# *ngif

## Overview
The `*ngIf` directive in Angular is used to conditionally render elements in the DOM based on a given expression. It allows us to show or hide elements dynamically depending on whether the condition evaluates to true or false.

## Syntax

#### HTML
```html
// ngif.html

<element *ngIf="condition">
  Content to render when condition is true.
</element>
```
#### typescript
```ts
// ngif.ts

export class AppComponent {
  isLoggedIn: boolean = false;
  username: string = 'John';

  // Example method to check user authentication status
  isAuthenticated(): boolean {
    // Logic to check authentication status
    return this.isLoggedIn;
  }
}
```

#### HTML Example
```html
<div *ngIf="isLoggedIn">
  <p>Welcome, {{ username }}!</p>
</div>
```

In this example, the `<div>` element will only be rendered if the isLoggedIn property evaluates to true. Otherwise, it will be removed from the DOM.

#### Features
- Dynamic Rendering: The element with *ngIf will be added or removed from the DOM based on the condition.
- Performance Optimization: Elements are only rendered when the condition is true, aiding in performance optimization.

### Usage
- Use *ngIf to conditionally render elements based on dynamic conditions.
- Avoid overusing *ngIf on multiple nested elements for better performance.

### Tips
- Combine *ngIf with ng-template for else conditions.
- Utilize boolean variables or methods that return boolean values as conditions.
