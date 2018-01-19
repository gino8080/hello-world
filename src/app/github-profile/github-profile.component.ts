import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent{

  //ActivatedRoute to get paramters
  constructor(private route:Router) { }

  submit(){
    this.route.navigate(['/followers'],{
      queryParams : { page:1, order:'newest' }
    })
  }

}
