import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  //ActivatedRoute to get paramters
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  
    this.route.paramMap //observables to get all route parameters
      .subscribe(params =>{
        console.log(params) 
        //{ keys, username}
        //username because the name of the route path : "followers/:username", 

        //params.get / has / getAll
        let id = +params.get("id") //+ to cast string as a number
        console.log("ID",id)
      })
  }

}
