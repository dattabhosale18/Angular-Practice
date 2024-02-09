import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
// properties
username:string = "Yash"
age:number = 22
isAdult:boolean= true

imgpath: string= "../../../assets/images/image2.jpg"

disableinput:boolean = false 


myname: string=""

clicked(){
  alert('button clicked')
}
enableinput(){
  this.disableinput= !this.disableinput
}
showmsg(val:any){
  alert(val)
}

}

