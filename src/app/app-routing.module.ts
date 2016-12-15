import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShoppingListComponent} from "./recipes/shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import { RECIPE_ROUTES } from "./recipes/recipes.routes"

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}