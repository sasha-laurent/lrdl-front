import {Subject} from 'rxjs';
import {Recipe} from '../model/Recipe.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];
    private currentRecipe: Recipe;

    recipesSubject = new Subject<any>();

    constructor(private httpClient: HttpClient) {
    }

    public getAllRecipes() {
        return this.httpClient
            .get<Recipe[]>(environment.apiUrl + '/api/recipes')
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
                        this.currentRecipe = this.getFirstRecipe();
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

    public getFirstRecipe(): Recipe {
        return this.recipes[0] ?? null;
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

    public addRecipe(name: string, description: string, quantity: number, image: File): void {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('description', description);
        formData.append('quantity', quantity.toString());
        formData.append('image', image);

        this.httpClient
            .post<any>(environment.apiUrl + '/api/recipe', formData)
            .subscribe(
                (id) => {
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
