import { Component, EventEmitter, Input,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
 
})
export class ChildComponent{
  @Input()
  uname:string;
  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();
  passdata(){
    this.notify.emit("pass data from parent emitter")
  }
}
  

 
  

