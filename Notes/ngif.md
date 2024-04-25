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


## Examples

### Example 1 - Showing a Message if List is Empty

#### Typescript
```typescript
export class AppComponent {
  fruits: string[] = []; // An empty array
}
```

#### HTML
```HTML
<ul *ngIf= 'fruits.length > 0'>
  <li *ngFor='fruit of fruits'>{{ fruit }}</li>
</ul>

<p *ngIf='fruits.length === 0'>No Fruits to available</p>
```

#### Explanation
1. We have an array called fruits which may contain a list of fruits.

2. We use `*ngIf` to check if the length of the fruits array is greater than 0. If it is, we render a list `<ul>` of fruits using `*ngFor`, iterating over each fruit in the array and displaying it in a list item `<li>`

3. If the fruits array is empty (i.e., its length is 0), the condition in the `*ngIf` directive evaluates to false. In this case, we render a message `<p>` saying "No fruits available."

### Example 2 - Displaying Products with Specific Criteria

#### TypeScript
```typescript
export class AppComponent {
  products: {id: number, name: string, price: number}[] = [
    {
      id: 1,
      name: "product 1",
      price: 10
    },
    { 
      id: 2, 
      name: 'Product 2', 
      price: 20 },
    { 
      id: 3, 
      name: 'Product 3', 
      price: 30 
    }
  ]
}
```

#### HTML

```html
<li *ngFor = "product of products">
  <div *ngIf = "product.price > 15" >
    {{ product.name }} - ${{ product.price }}
  </div>

</li>
```

#### Explanation

1. We have an array of products, each with an id, name, and price.

2. Inside the `*ngFor` loop, we use `*ngIf` to conditionally render each product based on a specific criteria, in this case, whether its price is greater than 15.

3. If the condition `product.price > 15` evaluates to true for a product, it will be displayed along with its name and price. Otherwise, it will not be rendered.

### Example 3: Filter and Display Specific Items

In this example, we use `*ngIf` inside the `*ngFor` loop to conditionally render each item only if it contains the search query provided by the user (searchQuery).

#### TypeScript
```typescript
export class AppComponent {
  items: string[] = ['Apple', 'Banana', 'Orange', 'Kiwi', 'Pineapple'];
  searchQuery: string = 'a';
}
```

#### HTML

```html
<ul>
  <li *ngFor="let item of items">
    <div *ngIf="item.toLowerCase().includes(searchQuery.toLowerCase())">
      {{ item }}
    </div>
  </li>
</ul>
```

#### Objective: Filter and display items based on a search query.

#### Explanation:

1. We have an array called items containing a list of items.

2. We also have a searchQuery variable representing the user's search query.

3. Inside the `*ngFor loop`, we use `*ngIf` to filter and display items based on whether they contain the search query provided by the user.

4. We convert both the item and searchQuery to lowercase using `.toLowerCase()` to perform a case-insensitive comparison. We use `.includes()` to check if the item contains the search query.
5. If the condition `item.toLowerCase().includes(searchQuery.toLowerCase())` evaluates to true for an item, it will be displayed. Otherwise, it will not be rendered.