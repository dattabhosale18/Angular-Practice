import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  myVal: boolean=true

  fruits:string[]=["Apple","Banana","Orange","Mango","Strawberry","Peach"]

  myChoice:string="Peach"
}
