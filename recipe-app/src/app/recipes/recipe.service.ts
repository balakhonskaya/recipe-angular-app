import { EventEmitter } from '@angular/core';
import {Recipe } from './recipe.model'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipies: Recipe[] =[
        new Recipe('A Test 1 Recipe','This is test 1 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'  ),
        new Recipe('A Test 2 Recipe','This is test 2 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'  )
      ];

    getRecipes() {
        return this.recipies.slice();
    } 
}