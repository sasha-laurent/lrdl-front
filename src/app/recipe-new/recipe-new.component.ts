import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RecipeService} from '../service/recipe.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-recipe-write',
    templateUrl: './recipe-new.component.html',
    styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {

    constructor(private recipeService: RecipeService, private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const name = form.value.name;
        const description = form.value.description;
        const newRecipe = this.recipeService.addRecipe(name, description);
        this.recipeService.setCurrentRecipe(newRecipe.id);
        this.router.navigate(['/']);
    }
}
