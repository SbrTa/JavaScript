import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]  = [
    new Recipe('Recipe 01', 'Poached egg with vegetables',
      'https://www.seriouseats.com/recipes/images/2017/07/20170605-asparagus-poached-egg-walnut-vinaigrette-kenji-lopez-alt.jpg'),
    new Recipe('Recipe 02', 'Mutton veg',
      'https://www.seriouseats.com/recipes/images/2017/07/20170605-asparagus-poached-egg-walnut-vinaigrette-kenji-lopez-alt.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
