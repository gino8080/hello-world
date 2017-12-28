import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation : ViewEncapsulation.Emulated //default Shadow dom 99% compatible
  //encapsulation : ViewEncapsulation.Native //native isolated dom
  //encapsulation : ViewEncapsulation.None //
  
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
