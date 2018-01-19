import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      //.subscribe(response => this.posts = response.json()) //old method
      .subscribe(posts => this.posts = posts); //now they are mapped 
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post); //optimistic update, immediately add post

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
            //this.posts.splice(0, 0, post); //moved before for Optimistic update
          },
          (error: AppError) => {
            this.posts.splice(0,1); //if optimistic fails
            
            if (error instanceof BadInput) {
              // this.form.setErrors(error.originalError);
            }
            else throw error;
          });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    //1 using promises intead of observable
    //Delete and watch on NETWORK TAB
    //without observable no requests are made 
    this.service.delete(post.id)
    
    //2 with subscribe we do the request
    //.subscribe();
    //3 no subscribe for promises just .THEN() and CATCH(),
    //with promises the request start without then or catch
    //no needed subscribe()
    
    /*
    //optimistic update
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        
        null,
        (error: AppError) => {
          this.posts.splice(index,0, post); //optimistic rollback if fail, we re-add the deleted post

          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
        });
      */
  }
}
