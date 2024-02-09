import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  uname: any;
  upass: any;

  userData: any;

  constructor(private service: GlobalService, private router: Router) {}

  getData() {
    //console.log(this.uname + ',' + this.upass);
    this.service.getRecords('users').subscribe((res) => {
      //console.log(res)
      this.userData = res;

      const data = this.userData.filter((item: any) => {
        return item.username == this.uname && item.password == this.upass;
      });

      if (data.length > 0) {
        //console.log('valid user');
        this.service.signIn(this.uname);
        this.router.navigate(['/crud']);
      } else {
        //console.log('Invalid user');
        alert('Invalid credentials');
        this.uname = '';
        this.upass = '';
      }
    });
  }
}
