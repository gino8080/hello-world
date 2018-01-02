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

  //constructor should be small and fast
  constructor(private http:Http){
    
  }

  //when found it's called onInit
  ngOnInit(){
    this.http.get(this.url).subscribe((response)=>{
      this.posts = response.json();
    })
  }

  //lifecycle events component hooks
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

  deletePost(post){
    //no body on delete method
    this.http.delete(this.url+'/'+post.id)
      .subscribe(response=>{
        console.log(response.json())
        let index = this.posts.indexOf(post)
        this.posts.splice(index,1);
      })
  }

}
