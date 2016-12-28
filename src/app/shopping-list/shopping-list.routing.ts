import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list.component";

const SHOPPING_LIST_ROUTES = [
    { path: '', component: ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(SHOPPING_LIST_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class ShoppingListRoutingModule {}