import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  ngOnInit() {
  
  }
}

