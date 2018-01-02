import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable" //2 add Observables from rxjs
import 'rxjs/add/operator/catch'; //1 add the catch methods on http obesrvables
import { AppError } from '../common/app-error'; //3 add AppError 
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable()
export class PostService {
  //wrong url, error
  //private url = "https://xxxjsonplaceholder.typicode.com/posts";
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:Http) { 

  }

  getPosts(){
    return this.http.get(this.url)
  }

  createPosts(post){
    return this.http.post(this.url,JSON.stringify(post))
      .catch((error:Response)=>{
        if(error.status===400)
          return Observable.throw(new BadInput(error))
      })
  }

  updatePost(post){
     return this.http.put(this.url,JSON.stringify(post))
  }

  deletePost(postId){
     return this.http.delete(this.url+'/'+postId)
     //.catch added by rxjs
     .catch((error:Response) => { 
       if(error.status===404){
         return Observable.throw(new NotFoundError())
       }
       //Observable by rxjs
        return Observable.throw(new AppError(error)) //send the error to the custom Error class
     })
  }
}
