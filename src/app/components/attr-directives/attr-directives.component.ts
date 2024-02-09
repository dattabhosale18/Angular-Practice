import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attr-directives.component.html',
  styleUrls: ['./attr-directives.component.css']
})
export class AttrDirectivesComponent {
  //simple property to use with ngstyle
  myNgStyle={
    color:"red"
  }
  //property to use with ngstyle based on condition
  flag:boolean=false
  myNewStyle={
    color:this.flag? "red":"greenyellow",
    backgroundColor: this.flag?"cyan":"black"
  }

  //property to use with ngClass
  myNgClasses={
    "txtDanger": this.flag,
    "txtSuccess":!this.flag
  }
}
