import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://images.squarespace-cdn.com/content/v1/626a3e2c3e96e84c4b6db2fb/004ba572-363d-4fce-9c38-c3f0f1cdba16/baked-ziti-with-egg-0416-2.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://images.squarespace-cdn.com/content/v1/626a3e2c3e96e84c4b6db2fb/004ba572-363d-4fce-9c38-c3f0f1cdba16/baked-ziti-with-egg-0416-2.jpg')
  ];

  ngOnInit() {
  
  }
}

