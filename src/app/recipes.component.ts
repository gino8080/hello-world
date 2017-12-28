import {Component} from '@angular/core'
import { RecipesService } from './recipes.service';

//decorator function
@Component({
    selector:'recipes',
    
    template : `
        <em>manual mode :(</em>
        <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
        <em>angular Banana in the box way! [()] :)</em>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    ` 
})

export class RecipesComponent{

    email = "gino@mailinator.com";

    onKeyUp(){
        console.log(this.email)    
    }

}