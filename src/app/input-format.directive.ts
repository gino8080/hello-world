import { 
  Directive, 
  HostListener, //to cast events
  ElementRef,
  Input
 } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appInputFormat]' //attrbute selector
})
export class InputFormatDirective {
  @Input('format') format : Input;
  
  constructor(private el:ElementRef) { }
  
  //@HostListener('eventName') 
  @HostListener('focus') onFocus(){
    console.log("on Focus");
  }

  @HostListener('blur') onBlur(){
    console.log("on Blur");
    let value: string = this.el.nativeElement.value;
    if(this.format=="'lowercase"){
      this.el.nativeElement.value=value.toLowerCase();
    }else{
      this.el.nativeElement.value=value.toUpperCase();
    }
  }


}
