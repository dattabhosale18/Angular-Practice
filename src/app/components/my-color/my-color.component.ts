import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChangeColorDirective } from 'src/app/custom-dir/change-color.directive';
import { MyService } from 'src/app/shared/services/my.service';

@Component({
  selector: 'app-my-color',
  templateUrl: './my-color.component.html',
  styleUrls: ['./my-color.component.css']
})
export class MyColorComponent {
  //ViewChild will always refer to the first found child
 @ViewChild(ChangeColorDirective) c1: ChangeColorDirective | undefined
  
 //ViewChildren will refer to all the matching children. stored in a list.
 @ViewChildren(ChangeColorDirective) allChildren:QueryList<ChangeColorDirective> |undefined
 
 Products: any

 constructor(private service: MyService ){}

 ngOnInit():void {
  this.Products = this.service.getProducts()
 }


 setColor(color: string){

 // this.c1?.changeColor(color)

  this.allChildren?.forEach(e=>{
    e.changeColor(color)
  })

 }
}
