import {Component} from '@angular/core'
import { RecipesService } from './recipes.service';

//decorator function
@Component({
    selector:'recipes',
    
    template : `
       <input #email (keyup.enter)="onKeyUp(email.value)" />
    ` 
})

export class RecipesComponent{

     onKeyUp(email){
        
            console.log(email)
        
    }

}