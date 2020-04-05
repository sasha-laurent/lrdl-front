export class RecipeService {
  private recipes = [
    {
      name: 'Cheesecake',
      description: 'This is pure sweetness'
    },
    {
      name: 'Oinion rings',
      description: 'Impress your friends at game night'
    },
    {
      name: 'Poke bowl',
      description: 'Poke bowl! Go!'
    }
  ];

  // TODO : temporarily set first recipe as default
  private currentRecipe: {
    name: string;
    description: string
  } = this.recipes[0];

  public getAllRecipes() {
    return this.recipes;
  }

  public getRecipe(id: number) {
    return this.recipes[id];
  }

  public getCurrentRecipe() {
    return this.currentRecipe;
  }

  public setCurrentRecipe(id: number) {
    this.currentRecipe = this.recipes[id];
  }
}
