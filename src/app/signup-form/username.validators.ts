import { AbstractControl,ValidationErrors} from "@angular/forms";

export class UsernameValidators{
    //no space in username
    static cannotContainSpace(control:AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0) 
            return { cannotContainSpace : true } //detailf about error, true or an object with details

        return null;
    }   

    //Check username already taken
    static shouldBeUnique(control:AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve,reject)=>{
            console.log("checink username..")
            //simulating an async operation
            setTimeout(()=>{
                if(control.value==="gino"){
                    resolve({shouldBeUnique:true}); 
                }else{
                    resolve(null)
                }
            },2000)
        })
    }
}