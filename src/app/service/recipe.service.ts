import {Subject} from 'rxjs';
import {Recipe} from '../model/Recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        {
            id: 1,
            name: 'Cheesecake',
            description: 'This is pure sweetness'
        },
        {
            id: 2,
            name: 'Oinion rings',
            description: 'Impress your friends at game night'
        },
        {
            id: 3,
            name: 'Poke bowl',
            description: 'Poke bowl! Go!'
        }
    ];

    recipesSubject = new Subject<any>();

    // TODO : temporarily set first recipe as default
    private currentRecipe: Recipe = this.recipes[0];

    public getAllRecipes() {
        return this.recipes;
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

    public addRecipe(name: string, description: string): Recipe {
        const id = this.recipes[(this.recipes.length - 1)].id + 1;
        const recipeObject = new Recipe(id, name, description);
        this.recipes.push(recipeObject);
        this.emitRecipeSubject();

        return recipeObject;
    }
}
