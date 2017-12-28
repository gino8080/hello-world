import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipe = {
    title : "Titolo",
    isFavorite : true
  }

  onFavoriteChanged(){
    console.log("changed")
    
  }
}
