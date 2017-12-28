import {Component} from '@angular/core'
import { RecipesService } from './recipes.service';

//decorator function
@Component({
    selector:'recipes',
    
    
    template : `
       <input (keyup)="onKeyUp($event)" />
       <input (keyup.enter)="onKeyUpEnter($event)" />
    ` 
})

export class RecipesComponent{
   
    onKeyUp($event){
        //console.log("keyup",$event);
        if($event.keyCode===13){
            console.log("ENTER pressed")
        }
    }

     onKeyUpEnter($event){
        
            console.log("KEYPRESS.ENTER")
        
    }

}