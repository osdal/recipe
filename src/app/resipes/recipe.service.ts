import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test', 
            'Simplr test', 
            'https://natashaskitchen.com/wp-content/uploads/2017/08/Avocado-Shrimp-Salsa-Recipe-4.jpg',
            [
                new Ingredient('Мясо', 1),
                new Ingredient('Картофель', 20)
            ]),
                
        new Recipe(
            'Другой тест', 
            'Nhfnfnf', 
            'https://natashaskitchen.com/wp-content/uploads/2017/08/Avocado-Shrimp-Salsa-Recipe-4.jpg',
            [
                new Ingredient('Бобы', 5),
                new Ingredient('Мясо', 1)
            ])    
    ];

getRecipes() {
    return this.recipes.slice();
}
}