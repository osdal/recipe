import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Recipe } from '../recipe.model';

// import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test', 'Simplr test', 'https://natashaskitchen.com/wp-content/uploads/2017/08/Avocado-Shrimp-Salsa-Recipe-4.jpg'),    
    new Recipe('Другой тест', 'Nhfnfnf', 'https://natashaskitchen.com/wp-content/uploads/2017/08/Avocado-Shrimp-Salsa-Recipe-4.jpg')    
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
