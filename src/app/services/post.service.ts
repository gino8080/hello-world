import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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
  }

  updatePost(post){
     return this.http.put(this.url,JSON.stringify(post))
  }

  deletePost(postId){
     return this.http.delete(this.url+'/'+postId)
  }
}
