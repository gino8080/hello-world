//All generic not only for post
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable" //2 add Observables from rxjs
import 'rxjs/add/operator/catch'; //1 add the catch methods on http obesrvables
import { AppError } from '../common/app-error'; //3 add AppError 
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable()
export class DataService {

    constructor(private url:string, private http:Http) { 

  }

  getAll(){
    return this.http.get(this.url)
    .catch(this.handleError) //not called()! just referenced
  }

  create(resource){
    return this.http.post(this.url,JSON.stringify(resource))
      .catch(this.handleError) //not called()! just referenced
  }

  update(resource){
     return this.http.put(this.url,JSON.stringify(resource))
  }

  delete(id){
     return this.http.delete(this.url+'/'+id)
     //.catch added by rxjs
     .catch(this.handleError) //not called()! just referenced
  }

  //global error mangament function
  //private becus used internally by this class
  private handleError(error:Response){
    if(error.status===400)
      return Observable.throw(new BadInput(error))

    if(error.status===404){
      return Observable.throw(new NotFoundError())
    }
    
    //Observable by rxjs
    return Observable.throw(new AppError(error)) //send the error to the custom Error class
  }
}
