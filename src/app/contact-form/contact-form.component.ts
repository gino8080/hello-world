import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{

  contactMethods = [{
    id:1,name:"email"
  },
{
  id:2,name:"Phone"
}]

contactRadios = [{
    id:1,name:"email"
  },
{
  id:2,name:"Phone"
}]
  log(x){
    //control.valid
    console.log(x,x.control)
  }

  submit(f){
    console.log(
      "FORM",
      f,
      f.form,
      f.valid,
      f.value //json form datas
    )
    
  }

}
