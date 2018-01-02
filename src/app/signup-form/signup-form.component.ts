import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('nome',Validators.required,), //static method of validators, called without ()
    'password': new FormControl('',Validators.required)
    
  });

  get password(){
    return this.form.get('password');
  }
}
