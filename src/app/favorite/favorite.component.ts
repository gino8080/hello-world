import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles : [
    `
    span{
      color: red ;
    }
    `
  ], //2 style way - inline
  styleUrls: ['./favorite.component.css'], //1 style way,
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean; 
  @Output('change') click = new EventEmitter();

  onClick() { 
    this.isSelected = !this.isSelected;
    this.click.emit({newValue:this.isSelected});
  }

}

export interface FavoriteChangedEventArgs {
  newValue:boolean
}
