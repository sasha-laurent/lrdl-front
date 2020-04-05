import { Component, OnInit, Input } from '@angular/core';
import {RecipeService} from '../service/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipeName: string;
  @Input() recipeDescription: string;
  @Input() index: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  getRecipeDescription(): string {
    return this.recipeDescription;
  }

  public showRecipeDetail(id: number) {
    this.recipeService.setCurrentRecipe(id);
  }
}
