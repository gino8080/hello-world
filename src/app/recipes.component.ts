import {Component} from '@angular/core'

//decorator function
@Component({
    selector:'recipes', //<recipes> //css selector could be <element>/.class/#id
    //template : '<h2>{{ "Title :"+title }}</h2>' //databinding 
    template : `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let recipe of recipes">
                {{recipe}}
            </li> 
        </ul>
    ` //string interpolation 
    //* when the DOM should be modified
})
//Pascal Naming convention
export class RecipesComponent{
    //to make an Angular Component we add DECORATORS
    title= "Lista di Ricette";

    recipes = ["Riso Patate e cozze","Carbonara","Abbacchio"]

    getTitle(){
        return this.title;
    }
}