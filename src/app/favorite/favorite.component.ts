import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean; //1 input decorator approach, now is exposed to outside

  constructor() { }

  ngOnInit() {
  }

  onClick() { 
    this.isFavorite = !this.isFavorite;
  }
}
