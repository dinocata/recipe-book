import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {ShoppingListService} from "./shopping-list.service";
import {Ingredient} from "../recipes/ingredient";

@Component({
    selector: 'rb-shopping-list-add',
    templateUrl: './shopping-list-add.component.html',
    styles: []
})
export class ShoppingListAddComponent implements OnChanges {
    @Input() item:Ingredient;
    @Output() cleared = new EventEmitter();
    isAdd = true;

    constructor(private sls:ShoppingListService) {
    }

    ngOnChanges(changes) {
        this.isAdd = changes.item.currentValue === null;
        if (this.isAdd) {
            this.item = {name: null, amount: null};
        }
    }

    onSubmit(ingredient:Ingredient) {
        const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
        if (!this.isAdd) {
            this.sls.editItem(this.item, newIngredient);
            this.onClear();
        } else {
            this.item = newIngredient;
            this.sls.addItem(this.item);
        }
    }

    onDelete() {
        this.sls.deleteItem(this.item);
        this.onClear();
    }

    onClear() {
        this.isAdd = true;
        this.cleared.emit(null)
    }
}
