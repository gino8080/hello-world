import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RecipeComponent } from './recipe/recipe.component'; //Auto Import plugin
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewRecipeFormComponent } from './new-recipe-form/new-recipe-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';

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
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewRecipeFormComponent,
    SignupFormComponent,
    AddRecipeFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    PostsComponent
  ],
  //Array of need module
  imports: [
    BrowserModule, //needed for every browser app
    FormsModule,
    ReactiveFormsModule, //needed for Reactive form
    HttpModule //instead of importing Http as single provider
  ],
  //List of all Dependencies used inthe components
  //Singleton Pattern
  providers: [
    PostService,
    //AppErrorHandler 
    //best to use a generic way
    {
      provide: ErrorHandler, 
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
