import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <div class="recipe">
      <h2 (click)="showDetails(currentRecipe)" *ngFor="let currentRecipe of recipes">Title: {{currentRecipe.title}}</h2>
    </div>
    <hr>
    <div *ngIf="selectedRecipe">
      <h3>{{selectedRecipe.title}}</h3>
      <ul class="result">
        <li>{{selectedRecipe.ingredients}}</li>
        <li>{{selectedRecipe.directions}}</li>
      </ul>
      <button class="btn btn-info" (click)="finished()">Hide Details</button>
      <hr>
    </div>
    <div *ngIf="selectedRecipe">
      <div class="form-group">
        <label>Title: </label>
        <input [(ngModel)]="selectedRecipe.title">
      </div>
      <button class="btn btn-info" (click)="finished()">Done</button>
  </div>
  `
})

export class AppComponent {
  selectedRecipe = null;
  recipes: Recipe[] = [
    new Recipe('Apple Pie', ['Crust','Filling','Apples'], ['Combine apples with filling', 'Put mixture on crust', 'Bake', 'Eat']),

    new Recipe('Tacos', ['Tortillas', 'meat', 'cilantro', 'onion', 'lime', 'salsa'], ['Cook meat', 'chop onions and cilantro', 'serve in tortilla with other indgredients', 'top with salsa and fresh squeezed lime juice']),

    new Recipe('Chocolate Cake', ['Flour', 'baking chocolate', 'sugar'], ['mix all the stuff', 'bake it'])
  ];

  showDetails(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finished() {
    this.selectedRecipe = null;
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string[]) {}

}
