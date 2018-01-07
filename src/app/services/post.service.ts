import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService extends DataService{
  //1 removed url
  //private url = "https://jsonplaceholder.typicode.com/posts";

  //2 removed private
  constructor(http:Http) { 
    //3 need super to create the inherited BASE class
    super("https://jsonplaceholder.typicode.com/posts",http);
  }

}
