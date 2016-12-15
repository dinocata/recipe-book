import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "./ingredient";

@Injectable()
export class RecipeService {

    private recipes:Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
            [
                new Ingredient('French Fries', 2),
                new Ingredient('Pork Meat', 1)
            ]),
        new Recipe('Summer salad', 'Okayish', 'http://www.saladbarmn.com/assets/img/slider/2.jpg', [])
    ];

    constructor() {
    }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id:number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe:Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }

    addRecipe(recipe:Recipe) {
        this.recipes.push(recipe);
    }

    editRecipe(oldRecipe:Recipe, newRecipe:Recipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }

}
