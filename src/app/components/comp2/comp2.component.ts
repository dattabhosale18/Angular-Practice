import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, AfterViewInit{

  @ViewChild(Comp1Component) comp1: Comp1Component | undefined

  @ViewChild("mypara") para: ElementRef | undefined
  
  constructor(){}

  ngOnInit()
  {}

  increment(){

    this.comp1?.incrementCounter()

  }

  decrement(){
    this.comp1?.decrementCounter()
  }

  ngAfterViewInit():void{
    if(this.para){
    this.para.nativeElement.style.backgroundColor= "cyan"
  }}

}
