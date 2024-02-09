import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  msg:string="welcome to the world of angular"

  emp={
    empId:101,
    name:"virat",
    post:"Senior Batter",
    address:"Delhi"

  }

  myDate=new Date()

  students=[
    {id:101, name:"Dilip", gender:"Male",address:"Satara",contact:98989844332},
    {id:102, name:"Mansi", gender:"Female",address:"Pune",contact:98989842532},
    {id:103, name:"Akash", gender:"Male",address:"Mumbai",contact:98989841332},
    {id:104, name:"Shubham", gender:"Male",address:"Nagpur",contact:98989840332},
    {id:105, name:"Priyanka", gender:"Female",address:"Kolhapur",contact:98981944332}

  ]
  constructor(private router: Router){}

  setId(id:any){
    //console.log(id)
    this.router.navigate(["/pipe",id])

  }
}
