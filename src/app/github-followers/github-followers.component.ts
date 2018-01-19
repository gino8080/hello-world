import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route:ActivatedRoute,
    private service: GithubFollowersService
  ) { }

  ngOnInit() {
    //required params 2 methods observable or snapshot
    this.route.paramMap.subscribe(requiredParams=>{

    });
    let id = this.route.snapshot.paramMap.get("id") //required params

    //optional params 2 methods observable or snapshot
    this.route.queryParamMap.subscribe(optionalParams=>{

    });
    let page = this.route.snapshot.queryParamMap.get("page");

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
