import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../service/recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

    recipeId: number;
    recipeName: string;
    recipeDescription: string;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.recipeId = this.route.snapshot.params.id;
    }

}
