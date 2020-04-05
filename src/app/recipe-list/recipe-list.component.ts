import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
