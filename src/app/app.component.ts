import {Component, OnInit} from '@angular/core';
import {RecipeService} from './service/recipe.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    navThemes: string[] =
        [
            'navbar navbar-expand-lg navbar-light bg-light',
            'navbar navbar-expand-lg navbar-dark bg-dark'
        ];
    containerThemes: string[] =
        [
            'bg-light',
            'bg-dark text-light'
        ];
    btnThemes: string[] =
        [
            'btn ml-auto btn-dark',
            'btn ml-auto btn-light'
        ];
    btnTexts: string[] =
        [
            'sombre',
            'clair'
        ];
    currentTheme = 0;
    navTheme: string = this.navThemes[0];
    containerTheme: string = this.containerThemes[0];
    btnTheme: string = this.btnThemes[0];

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.recipeService.getAllRecipes();
    }

    onThemeChange() {
        this.toggleTheme();
        this.navTheme = this.navThemes[this.currentTheme];
        this.containerTheme = this.containerThemes[this.currentTheme];
        this.btnTheme = this.btnThemes[this.currentTheme];
    }

    toggleTheme() {
        if (this.currentTheme === 0) {
            this.currentTheme = 1;
        } else {
            this.currentTheme = 0;
        }
    }
}
