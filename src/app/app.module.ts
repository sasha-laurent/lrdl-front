import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeComponent} from './recipe/recipe.component';
import {FormsModule} from '@angular/forms';
import {RecipeService} from './service/recipe.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {RouterModule, Routes} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { TimerComponent } from './timer/timer.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'write', component: RecipeFormComponent },
    { path: 'write/:id', component: RecipeFormComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        RecipeListComponent,
        RecipeComponent,
        RecipeDetailComponent,
        RecipeFormComponent,
        RecipesComponent,
        TimerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [RecipeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
