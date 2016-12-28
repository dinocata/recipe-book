import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecipeBookAppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from "./app.routing";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import {CoreModule} from "./core.module";

@NgModule({
    declarations: [
        RecipeBookAppComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        CoreModule
    ],
    providers: [ShoppingListService, RecipeService],
    bootstrap: [RecipeBookAppComponent]
})
export class AppModule {
}
