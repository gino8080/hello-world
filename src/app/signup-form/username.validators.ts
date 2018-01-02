import { AbstractControl,ValidationErrors} from "@angular/forms";

export class UsernameValidators{
    //no space in username
    static cannotContainSpace(control:AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0) 
            return { cannotContainSpace : true } //detailf about error, true or an object with details

        return null;
    }   
}