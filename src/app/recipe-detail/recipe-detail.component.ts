import {Component, Input} from '@angular/core';
import {Recipe} from '../model/Recipe.model';
import {environment} from "../../environments/environment";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

    @Input() currentRecipe: Recipe;

    public getImagePath() {
        return environment.apiUrl + '/images/' + this.currentRecipe.imageFilename;
    }
}
