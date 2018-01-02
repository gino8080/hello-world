import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts :any[];
  private url = "https://jsonplaceholder.typicode.com/posts";

  //private so is accessible also in other methods of the class
  constructor(private http:Http){
    http.get(this.url).subscribe((response)=>{
      this.posts = response.json();
    })
  }

  createPost(input: HTMLInputElement){
    
    let post = {
      title: input.value
      //description ... other values
    }
    input.value = '';
    this.http.post(this.url,JSON.stringify(post))
      .subscribe(response=>{
        post['id'] = response.json().id; //['id'] to avoid ts error 
        this.posts.splice(0,0,post)
        console.log(response.json())
      })
  }

}
