import {Component} from '@angular/core';
import {RecipeService} from '../service/recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

    constructor(private recipeService: RecipeService) {
    }

    public getCurrentRecipe() {
        return this.recipeService.getCurrentRecipe();
    }
}
