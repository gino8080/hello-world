import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


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
    this.service.getPosts()
    .subscribe(
      (response)=>{
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
      .subscribe(
        (response)=>{
          post['id'] = response.json().id; //['id'] to avoid ts error 
          this.posts.splice(0,0,post)
          console.log(response.json())
        },
      (error:Response)=>{
        //alert("An Unexpected error");
        if(error instanceof BadInput){
          this.form.setErrors(error.json()) //not working just to explain the logic..
        }else{
           alert("An Unexpected error occurred");
           console.log(error)
        }        
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
      .subscribe(
      (response)=>{
        console.log(response.json())
        let index = this.posts.indexOf(post)
        this.posts.splice(index,1);
      },
  
      (error: AppError)=>{
        //alert("An Unexpected error");
        if(error instanceof NotFoundError){
          alert("this post has already been deleted!")
        }else{
           alert("An Unexpected error occurred");
           console.log(error)
        }        
      }
    )
  }

}
