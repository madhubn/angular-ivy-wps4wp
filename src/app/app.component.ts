import { Component,  } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  
})
export class AppComponent  {
username:string='Madhan';
fromchild:string;
parentmethod(data){
  this.fromchild=data;
}

}
