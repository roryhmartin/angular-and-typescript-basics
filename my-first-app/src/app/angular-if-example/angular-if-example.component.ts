import { Component } from '@angular/core';

@Component({
  selector: 'angular-if-example',
  templateUrl: './angular-if-example.component.html',
  styleUrl: './angular-if-example.component.css'
})
export class AngularIfExampleComponent {
  // example 1
  fruit: string[] = ["Apple", "Banana", "Orange"]; 

  // example 2
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

  // example 3
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
}
