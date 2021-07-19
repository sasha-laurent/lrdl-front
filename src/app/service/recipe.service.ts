import {Subject, Subscription} from 'rxjs';
import {Recipe} from '../model/Recipe.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];
    private currentRecipe: Recipe;
    private editedRecipe: Recipe;

    recipesSubject = new Subject<any>();
    editRecipeSubject = new Subject<any>();

    constructor(private httpClient: HttpClient) {
    }

    public postRecipe(recipe: Recipe, image: File): void {
        const formData = new FormData();

        formData.append('name', recipe.name);
        formData.append('description', recipe.description);
        formData.append('quantity', recipe.quantity.toString());
        formData.append('image', image);

        if (null !== recipe.id) {
            this.httpClient
                .post<Recipe>(environment.apiUrl + '/api/recipe/' + recipe.id, formData)
                .subscribe(
                    (recipeObject) => {
                        this.recipes.splice(this.findRecipeIndex(recipeObject), 1, recipeObject);
                        this.setCurrentRecipe(recipeObject.id);
                        this.emitAllRecipesSubject();
                    },
                    (error) => {
                        console.log('there was an error');
                        console.log(error);
                    },
                    () => {
                        if (!this.currentRecipe) {
                            this.currentRecipe = this.findRecipe(1);
                        }
                    }
                );
        } else {
            this.httpClient
                .post<Recipe>(environment.apiUrl + '/api/recipe', formData)
                .subscribe(
                    (recipeObject) => {
                        this.recipes.push(recipeObject);
                        this.setCurrentRecipe(recipeObject.id);
                        this.emitAllRecipesSubject();
                    },
                    (error) => {
                        console.log('there was an error');
                        console.log(error);
                    },
                    () => {
                        if (!this.currentRecipe) {
                            this.currentRecipe = this.findRecipe(1);
                        }
                    }
                );
        }

    }

    public getAllRecipes(): Subscription {
        return this.httpClient
            .get<Recipe[]>(environment.apiUrl + '/api/recipes')
            .subscribe(
                (response) => {
                    this.recipes = response;
                    this.emitAllRecipesSubject();
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

    public getRecipeById(id: string) {
        return this.httpClient
            .get<Recipe>(environment.apiUrl + '/api/recipes/' + id)
            .subscribe(
                (response) => {
                    this.editedRecipe = response;
                    this.emitEditRecipeSubject();
                },
                (error) => {
                    console.log('there was an error');
                    console.log(error);
                },
                () => {
                    if (!this.editedRecipe) {
                        this.editedRecipe = null;
                    }
                }
            );
    }

    public findRecipe(id: number): Recipe {
        const cachedRecipe = this.recipes.find(
            (recipe) => {
                return recipe.id === +id;
            }
        );

        if (undefined !== cachedRecipe) {
            return cachedRecipe;
        }

        // Todo : implement it, does not work for now
        this.getRecipeById(id + '');

        return this.editedRecipe;
    }

    public findRecipeIndex(recipe: Recipe) {
        return this.recipes.findIndex(
            (recipeCompared) => {
                return recipe.id === recipeCompared.id;
            }
        );
    }

    public getFirstRecipe(): Recipe {
        return this.recipes[0] ?? null;
    }

    public getCurrentRecipe(): Recipe {
        return this.currentRecipe;
    }

    public getNextRecipe() {
        this.currentRecipe = this.recipes[this.recipes.indexOf(this.currentRecipe) + 1];
    }

    public getPreviousRecipe() {
        this.currentRecipe = this.recipes[this.recipes.indexOf(this.currentRecipe) - 1];
    }

    public isFirstRecipe() {
        return 0 === this.recipes.indexOf(this.currentRecipe);
    }

    public isLastRecipe() {
        return this.recipes.length - 1 === this.recipes.indexOf(this.currentRecipe);
    }

    public setCurrentRecipe(id: number): void {
        this.currentRecipe = this.findRecipe(id);
    }

    public emitAllRecipesSubject(): void {
        this.recipesSubject.next(this.recipes.slice());
    }

    public emitEditRecipeSubject(): void {
        this.editRecipeSubject.next(this.editedRecipe);
    }
}
