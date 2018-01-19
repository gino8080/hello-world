import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import {Observable} from "rxjs/Observable"
import "rxjs/add/observable/combineLatest" //method to combine multiple observables
import "rxjs/add/operator/map" 
import "rxjs/add/operator/switchMap" 

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
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    //use switchMap operator to transorm the objects in an observable<any>
    .switchMap(combined=>{
      let id = combined[0].get("id");
      let page = combined[1].get("page");

      return this.service.getAll();
    })
    .subscribe(followers => this.followers = followers )
   
  }
}
