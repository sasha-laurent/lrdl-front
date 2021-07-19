import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../service/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../model/Recipe.model';

@Component({
    selector: 'app-recipe-write',
    templateUrl: './recipe-form.component.html',
    styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
    private image: File;
    editedRecipe: Recipe;
    isEdit: boolean;

    constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.isEdit = (undefined !== this.route.snapshot.params.id);

        if (this.isEdit) {
            this.editedRecipe = this.recipeService.findRecipe(this.route.snapshot.params.id);
        } else {
            this.editedRecipe = new Recipe();
        }
    }

    onSubmit() {
        this.recipeService.postRecipe(this.editedRecipe, this.image);
        this.router.navigate(['/']);
    }

    onFileChanged(event) {
        this.image = event.target.files[0];
    }
}
