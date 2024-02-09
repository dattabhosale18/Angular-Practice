import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { regExName } from 'src/app/shared/custom-pipe/common data/constants';
@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent {

  empData: any
  //private formBuilder:FormBuilder = new FormBuilder()
  
  //inject the FormBuilder service dependency by specifying it in the constructer
  constructor(private formBuilder:FormBuilder){}
  
  // ngOnInit() is one of the component lifecycle hooks
  ngOnInit():void {
   // this.empData=new FormGroup({
     // fName:new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]{3,30}')]),
     // lName:new FormControl(),
     // courses:new FormControl(),
     // term:new FormControl(),

//  })

this.empData= this.formBuilder.group({
  fName: ['',[Validators.required, Validators.pattern(regExName)]],
  lName: ['',[Validators.required, Validators.pattern(regExName)]],
  courses: ['',[Validators.required]],
  term: ['',[Validators.required]]

})


  }

  getvalue(value:any){
    console.log(value)
  }

  
}
