import {Component, Input, ViewChild} from '@angular/core';
import {Recipe} from '../model/Recipe.model';
import {environment} from "../../environments/environment";
import {RecipeService} from "../service/recipe.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent {

    @Input() currentRecipe: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    public getImagePath() {
        if ('' === this.currentRecipe.imageFilename || null === this.currentRecipe.imageFilename) {
            return 'assets/img/cat.png';
        }

        return environment.apiUrl + '/images/' + this.currentRecipe.imageFilename;
    }

    public turnPage(forward = true) {
        forward ? this.recipeService.getNextRecipe() : this.recipeService.getPreviousRecipe();
    }

    public isFirstPage() {
        return this.recipeService.isFirstRecipe();
    }

    public isLastPage() {
        return this.recipeService.isLastRecipe();
    }
}
