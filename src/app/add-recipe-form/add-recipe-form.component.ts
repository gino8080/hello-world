import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent {

  form;
  //1 manual way
  /*
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    contact : new FormGroup({
      email:new FormControl(),
      phone:new FormControl(),
    }),
    topics : new FormArray([ ])
  })
  */
  

  //2 FormBuilder way
  constructor(fb: FormBuilder){
    this.form = fb.group({
      name : ['',Validators.required],
      contact : fb.group({
        email:[],
        phone:[],
      }),
      topics : fb.array([])
    })
  }

}
