import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../service/recipe.service';
import {Recipe} from '../model/Recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    @Input() currentRecipe: Recipe;

    constructor(private recipeService: RecipeService) { }

    ngOnInit(): void {
        this.currentRecipe = this.recipeService.getCurrentRecipe();
    }
}
