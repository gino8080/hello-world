import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent {

  form = new FormGroup({
    topics : new FormArray([ ])
  })

  addTopic(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value))
    topic.value = '';
  }

  removeTopic(topic:HTMLInputElement){
    let index = this.topics.controls.indexOf(topic)
    this.topics.removeAt(index)
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

}
