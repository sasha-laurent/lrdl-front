import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeComponent} from './recipe/recipe.component';
import {FormsModule} from '@angular/forms';
import {RecipeService} from './service/recipe.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeNewComponent} from './recipe-new/recipe-new.component';
import {RouterModule, Routes} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { TimerComponent } from './timer/timer.component';

const appRoutes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'write', component: RecipeNewComponent },
    { path: 'write/:id', component: RecipeEditComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        RecipeListComponent,
        RecipeComponent,
        RecipeDetailComponent,
        RecipeNewComponent,
        RecipesComponent,
        RecipeEditComponent,
        TimerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [RecipeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
