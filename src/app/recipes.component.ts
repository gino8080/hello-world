import {Component} from '@angular/core'
import { RecipesService } from './recipes.service';

//decorator function
@Component({
    selector:'recipes',
    
    
    template : `
        <h2>{{ getTitle() }}</h2>
        <h2 [textContent]="title"></h2>
        <h2>{{title}}</h2>
        <button class="btn btn-primary">save</button>
        <ul>
            <li *ngFor="let recipe of recipes"> 
                {{recipe}}
                <img src={{imageUrl}}  />
                <img [src]="imageUrl"  />
            </li> 
        </ul>
    ` //string interpolation 
    //* when the DOM should be modified
})
//Pascal Naming convention
export class RecipesComponent{
    //to make an Angular Component we add DECORATORS
    title= "Lista di Ricette";

    //no logic to get datas
    recipes;

    constructor(service:RecipesService){
        //let service = new RecipesService(); //too much coupled to the service, not good for testing or changing provider
        //using dependency we can change the service at runtime or by test
        this.recipes = service.getRecipes();
    }

    getTitle(){
        return this.title;
    }

    //Call an HTTP service
}