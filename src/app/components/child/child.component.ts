import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  pData: any;

  @Output()
  emitterObj = new EventEmitter();

  constructor() {
    console.log('child:constructor() called');
  }

  ngOnInit(): void {
    console.log('child:ngOnInit() called');
  }

  getMessage(val: any) {
    //console.log(val)
    this.emitterObj.emit(val);
  }

  ngOnDestroy(): void {
    console.log('child:ngOnDestroy() called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child:ngOnChanges() called');
  }
}
