import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeName: string = 'Super Recette';
  recipeDescription: string = 'Ceci est la description d\'une super recette !';

  constructor() { }

  ngOnInit(): void {
  }

  getRecipeDescription(): string {
    return this.recipeDescription;
  }

}
