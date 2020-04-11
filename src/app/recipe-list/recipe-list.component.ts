import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../service/recipe.service';
import {Subscription} from 'rxjs';
import {Recipe} from '../model/Recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[];
    recipesSubscription: Subscription;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.recipesSubscription = this.recipeService.recipesSubject.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        );
        this.recipeService.emitRecipeSubject();
    }

}
