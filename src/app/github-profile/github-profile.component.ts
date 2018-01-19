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
    //everytime the params change over time we are notified
    //everytime we change page the component is destroyed 
   console.log("GithubProfileComponent ON INIT")
   //on the same page we can observe the paramMap for the changing paramas
   this.route.paramMap.subscribe(params=>{
     console.info(params.get("id"))
   })

   //usefull when reinitialized and if we don't have the NEXT/PREV button or navigate AWAY with back button
   let snapShotID = this.route.snapshot.paramMap.get("id")
   console.info("snapShotID",snapShotID)
  }

}
