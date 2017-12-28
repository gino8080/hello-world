import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './recipe/recipe.component'; //Auto Import plugin
import { RecipesService } from './recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  //List of all Dependencies used inthe components
  //Singleton Pattern
  providers: [
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
