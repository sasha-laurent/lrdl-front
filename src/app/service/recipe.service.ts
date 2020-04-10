export class RecipeService {
    private recipes = [
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

    // TODO : temporarily set first recipe as default
    private currentRecipe: {
        id: number;
        name: string;
        description: string
    } = this.recipes[0];

    public getAllRecipes() {
        return this.recipes;
    }

    public getRecipe(id: number) {
        return this.recipes.find(
            (recipe) => {
                return recipe.id === id;
            }
        );
    }

    public getCurrentRecipe() {
        return this.currentRecipe;
    }

    public setCurrentRecipe(id: number) {
        this.currentRecipe = this.recipes[id];
    }
}
