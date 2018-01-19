import {Component} from '@angular/core'
//import { RecipesService } from './recipes.service';

//decorator function
@Component({
    selector:'recipes',
    
    template : `
       {{recipe.title | uppercase | lowercase}} <br/>
       {{recipe.liked | number }} <br/>
       {{recipe.rating | number:'1.1-2'}} <br/>
       {{recipe.price | currency:'EUR':true:'3.2-2'}} <br/>
       {{recipe.date | date:'short'}} <br/>
       {{recipe.text | summary:10}} <br/>

       <input type="text" [(ngModel)]="title">
       <br/>
       {{title | titleCase}}
    ` 
})

export class RecipesComponent{

    recipe = {
        title : "Patate riso e cozze",
        liked : 56578,
        rating: 4.655,
        price:10.50,
        date : new Date(2018,1,1),
        text : "loremElit non duis velit reprehenderit eiusmod nostrud enim pariatur esse laboris non. Irure reprehenderit est nostrud voluptate sunt deserunt Lorem aliqua. Tempor mollit sunt Lorem in aliquip quis pariatur. Adipisicing voluptate magna elit ipsum exercitation id. Irure ad occaecat commodo eu nostrud deserunt nisi proident minim incididunt pariatur. Tempor aliqua sunt laboris pariatur excepteur non."
    }

}