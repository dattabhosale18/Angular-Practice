import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { DataService } from 'src/app/shared/services/data.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  tableName = 'Employee';
  constructor(private service: GlobalService, private router: Router) {}

  addData(data: any) {
    //console.log(data)
    const empObj = {
      name: data.name,
      post: data.post,
      salary: data.salary,
      address: data.address,
    };

    this.service.addRecord(this.tableName, empObj).subscribe(() => {
      alert('Record added !');
      this.router.navigate(['/crud']);
    });
  }
}
