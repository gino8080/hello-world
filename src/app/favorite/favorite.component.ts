import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  //@Input('is-favorite') isFavorite: boolean; //1 input decorator approach, now is exposed to outside
  @Input('isFavorite') isSelected: boolean; //1 input decorator approach, now is exposed to outside

  @Output() change = new EventEmitter; //name of the event, new because is 

  constructor() { }

  ngOnInit() {
  }

  onClick() { 
    this.isSelected = !this.isSelected;
    this.change.emit();
  }

}