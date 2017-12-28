import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes = [{
    id:1,title:"patate riso e cozze"
  },
  {
    id:1,title:"carbonara"
  },
    {id:1,title:"pasta al pesto"}
  ];

  onAdd(){
    this.recipes.push({
      id:4,
      title:"new recipe"
    })
  }

  onRemove(recipe){
    let index = this.recipes.indexOf(recipe)
    this.recipes.splice(index,1);
  }

  onChange(recipe){
   recipe.title="Changed!"
  }

}
