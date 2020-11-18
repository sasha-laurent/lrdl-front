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
    private image: File;

    constructor(private recipeService: RecipeService, private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const name = form.value.name;
        const description = form.value.description;
        const quantity = form.value.quantity;
        const image = this.image;

        this.recipeService.addRecipe(name, description, quantity, image);
        this.router.navigate(['/']);
    }

    onFileChanged(event ) {
        this.image = event.target.files[0];
    }
}
