import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RecipeComponent } from './recipe/recipe.component'; //Auto Import plugin
import { RecipesService } from './recipes.service';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  //all the components and Pipes
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent,
    FavoriteComponent,
    SummaryPipe,
    TitleCasePipe,
    PanelComponent,
    LikeComponent
  ],
  //Array of need module
  imports: [
    BrowserModule, //needed for every browser app
    FormsModule
  ],
  //List of all Dependencies used inthe components
  //Singleton Pattern
  providers: [
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
