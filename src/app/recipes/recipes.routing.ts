import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesComponent} from "./recipes.component";

export const RECIPE_ROUTES: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(RECIPE_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRoutingModule {}

//RouterModule.forChild(RECIPE_ROUTES);
//export const recipesRouting = RouterModule;