import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {UsernameValidators} from './username.validators'
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl(
      '', //the initial value
      [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ], //the Sync validators
    UsernameValidators.shouldBeUnique //the ASYNC validators
  ),
    'password': new FormControl('',Validators.required)
    
  });

  login(){
    
    /*example login service
    let isValid = authService.login(this.form.value);
    if (!isValid){
      //wrong credentials
      //Set error on form manually
      this.form.setErrors({
          invalidLogin:true
      })
      //or directly on a specific field this.username.setErrors(...)
    }
    */

    this.form.setErrors({
          invalidLogin:true
      });
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }
}
