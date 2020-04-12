import {Component, Input} from '@angular/core';
import {Recipe} from '../model/Recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

    @Input() currentRecipe: Recipe;
}
