import {Subject} from 'rxjs';
import {Recipe} from '../model/Recipe.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];

    recipesSubject = new Subject<any>();

    constructor(private httpClient: HttpClient) {
    }

    private currentRecipe: Recipe;

    public getAllRecipes() {
        return this.httpClient
            .get<Recipe[]>('http://localhost:8000/api/recipes')
            .subscribe(
                (response) => {
                    this.recipes = response;
                    this.emitRecipeSubject();
                },
                (error) => {
                    console.log('there was an error');
                    console.log(error);
                },
                () => {
                    if (!this.currentRecipe) {
                        this.currentRecipe = this.getRecipe(1);
                    }
                }
            );
    }

    public getRecipe(id: number): Recipe {
        return this.recipes.find(
            (recipe) => {
                return recipe.id === id;
            }
        );
    }

    public getCurrentRecipe(): Recipe {
        return this.currentRecipe;
    }

    public setCurrentRecipe(id: number): void {
        this.currentRecipe = this.getRecipe(id);
    }

    public emitRecipeSubject(): void {
        this.recipesSubject.next(this.recipes.slice());
    }

    public addRecipe(name: string, description: string, quantity: number): void {
        const formData: {name: string, description: string, quantity: number} = {
            name,
            description,
            quantity,
        };

        this.httpClient
            .post<any>('http://localhost:8000/api/recipe', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .subscribe(
                (id) => {
                    console.log(id);
                    const recipeObject = new Recipe(id, name, description, quantity);
                    this.recipes.push(recipeObject);
                    this.setCurrentRecipe(recipeObject.id);
                    this.emitRecipeSubject();
                },
                (error) => {
                    console.log('there was an error');
                    console.log(error);
                },
                () => {
                    if (!this.currentRecipe) {
                        this.currentRecipe = this.getRecipe(1);
                    }
                }
            );
    }
}
