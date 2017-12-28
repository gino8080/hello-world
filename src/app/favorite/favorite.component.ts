import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs : ['isFavorite'] //2 input decorator approach, now is exposed to outside
  //the problem is it's a string so not good for refactoring
})
export class FavoriteComponent implements OnInit {
  isSelected: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() { 
    this.isSelected = !this.isSelected;
  }
}
