import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  counter: number= 0
  counterMsg:string='No counter value set'


  incrementCounter(){
    this.counter++
    this.counterMsg= 'Counter value:' +this.counter
  }

  decrementCounter(){
    this.counter--
    this.counterMsg= 'Counter value:' +this.counter
  }


}
