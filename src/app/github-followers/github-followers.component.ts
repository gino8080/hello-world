import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import {Observable} from "rxjs/Observable"
import "rxjs/add/observable/combineLatest" //method to combine multiple observables

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

    //combine multiple observable into 1
    let obs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    obs.subscribe(combined=>{
      //required paramMap
      let id = combined[0].get("id");
      let page = combined[1].get("page");

      console.log(id, page)
      //this.service.getAll({id:id, page:page}) //our getAll does not accept params, but this is the way!
      this.service.getAll()
        .subscribe(followers => this.followers = followers);
    })

   
  }
}
