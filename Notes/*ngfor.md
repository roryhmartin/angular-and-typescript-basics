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

## Examples

### example 1 - Rendering a list of strings

#### HTML
```html
<li *ngFor="let item of fruit">{{ item }}</li>
```

#### Typescript
```typescript
fruit: string[] = ["Apple", "Banana", "Orange"]; 
```
In the TypeScript code `app.component.ts`, we have an array called fruits containing strings representing different types of fruits.

In the HTML template (app.component.html), we use *ngFor to loop through each fruit in the fruits array and display it inside a list item `<li>`

### example 2 - Rendering a List of Objects

#### HTML
```html
<li *ngFor="let product of products" >{{ product.id }} - {{ product.name }} (£{{ product.price }})</li>
```

#### Typescript

```typescript
products: {id: number, name: string, price: number}[] = [
    {
      id: 1, 
      name: "Product 1",
      price: 10
    },
    {
      id: 2,
      name: "Product 2",
      price: 20
    },
    {
      id: 3,
      name: "Product 3",
      price: 30
    }
  ];
```
In the TypeScript code, we have an array called products containing objects representing different products. 

Each product has an id, name, and price.

In the HTML template, we use `*ngFor` to iterate over each product in the products array and display its name and price inside a list item.

### example 3 - Generate a numbered list

#### html
```html
<ul>
  <li *ngFor="index of itemCountArray(); let i = index">{{ i + 1 }}</li>
</ul>
```

### typescript
```typescript
itemCount: number = 5;

  itemCountArray() {
    // Initialize an empty array to store indices
    const counter = [];
    
    // Loop from 0 to itemCount - 1 and push each index to the array
    for (let i = 0; i < this.itemCount; i++) {
      counter.push(i);
    }
    
    // Return the array of indices
    return counter;
  }
```
We initialize an empty array called counter to store the indices.

We use a for loop to iterate from 0 to itemCount - 1.

Inside the loop, we push each index (i) to the counter array.

Finally, we return the array of indices(counter)
