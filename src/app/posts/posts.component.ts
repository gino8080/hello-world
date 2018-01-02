import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts :any[];
  private url = "https://jsonplaceholder.typicode.com/posts";

  //constructor should be small and fast
  constructor(private service:PostService){
    
  }

  //when found it's called onInit
  ngOnInit(){
    this.service.getPosts().subscribe((response)=>{
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
    this.service.createPosts(JSON.stringify(post))
      .subscribe(response=>{
        post['id'] = response.json().id; //['id'] to avoid ts error 
        this.posts.splice(0,0,post)
        console.log(response.json())
      })
  }

  updatePost(post){
    this.service.updatePost(post).subscribe(response=>{
        console.log(response.json())
      })
  }
  
  deletePost(post){
    //no body on delete method
    this.service.deletePost(post.id)
      .subscribe(response=>{
        console.log(response.json())
        let index = this.posts.indexOf(post)
        this.posts.splice(index,1);
      })
  }

}
