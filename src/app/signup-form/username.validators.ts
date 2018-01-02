import { AbstractControl,ValidationErrors} from "@angular/forms";

export class UsernameValidators{
    //no space in username
    static cannotContainSpace(control:AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0) 
            return { cannotContainSpace : true } //detailf about error, true or an object with details

        return null;
    }   

    //Check username already taken
    //Pronlerm with return value
    static shouldBeUnique(control:AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve,reject)=>{
            resolve(true);
            //or reject({message:'why it failed'})
        })
        
        //simulating an async operation
        setTimeout(()=>{
            if(control.value==="gino"){
            return {shouldBeUnique:true}; 
            }
            return null;
        },2000)
        
    }
}