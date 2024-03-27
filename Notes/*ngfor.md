# *ngfor

## Overview
The `*ngFor` directive in Angular is used for rendering a template for each item in a collection. It allows us to iterate over arrays or iterables and generate HTML elements dynamically based on the data.

## Syntax
```html
<element *ngFor="let item of items; let i = index">
  <!-- Content to repeat for each item -->
</element>
```

## Typescript Example
```typescript
export class AppComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
}
```

## HTML
```html
<ul>
  <li *ngFor="let item of items; let i = index">{{ item }}</li>
</ul>
```

In this example, an `<li>` element will be rendered for each item in the items array.

## Features
- Iteration: *ngFor iterates over each item in a collection and generates HTML elements accordingly.
- Index: The index variable provides the index of the current item in the iteration.

## Usage
 - Use *ngFor to render lists of items dynamically.
 - `*ngFor` works with arrays, iterables, and other types of collections.

