import {Component, OnInit, Input} from '@angular/core';
import {RecipeService} from '../service/recipe.service';
import {Recipe} from '../model/Recipe.model';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

    @Input() recipe: Recipe;
    @Input() index: number;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
    }

    public showRecipeDetail(id: number) {
        this.recipeService.setCurrentRecipe(id);
    }
}
