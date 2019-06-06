import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test', 'Simplr test', 'https://natashaskitchen.com/wp-content/uploads/2017/08/Avocado-Shrimp-Salsa-Recipe-4.jpg'),    
        new Recipe('Другой тест', 'Nhfnfnf', 'https://natashaskitchen.com/wp-content/uploads/2017/08/Avocado-Shrimp-Salsa-Recipe-4.jpg')    
    ];

getRecipes() {
    return this.recipes.slice();
}
}