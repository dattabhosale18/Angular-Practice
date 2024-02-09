import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

childData:any
 
data:any

getMsg(val:any){
  //console.log(val)
  this.data=val
}

}
