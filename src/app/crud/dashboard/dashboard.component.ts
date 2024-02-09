import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  term: any;
  empdata: any;
  order: string = 'name';

  reverse: boolean = false;
  tableName = 'Employee';

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    let a = this.globalService.getRecords(this.tableName);

    a.subscribe((res) => {
      console.log(res);
      this.empdata = res;
    });
  }

  delete(id: any) {
    this.globalService.deleteRecord(this.tableName, id).subscribe(() => {
      alert('Record deleted successfully');
    });
  }

  changeOrder() {
    this.reverse = !this.reverse;
  }
}
