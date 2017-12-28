import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.css']
})
export class NewRecipeFormComponent implements OnInit {
  categories = [
    { id: 1, name: 'Fish' },
    { id: 2, name: 'Meat' },
    { id: 3, name: 'Cakes' },
  ];

  constructor() { }

  submit(recipe) {
    console.log(recipe);
  }

  ngOnInit() {
  }

}
