import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  constructor(private element: ElementRef) { }
  
  //official doc.: a callback method that is invoked immediately after angular has completed initialization of a component's view. 
  //it is invoked only once when the view is instantiated.
  ngAfterViewInit(): void {
    
    this.element.nativeElement.style.color = "red"
  }

  // to apply color dynamically, let's add a new method.
  changeColor(newColor:string){

    this.element.nativeElement.style.color = newColor

  }
}
