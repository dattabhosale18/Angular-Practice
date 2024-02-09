import { Component } from '@angular/core';
import { regExName } from 'src/app/shared/custom-pipe/common data/constants';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {

  courses:string[]=['Angular','React','Python','Java','selenium','c++']

  regularExpName = regExName
  
  getData(val:any){
    console.log(val)

  }

}
