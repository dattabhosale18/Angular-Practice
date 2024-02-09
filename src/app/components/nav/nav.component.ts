import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private service: GlobalService, private router: Router) {}

  signOut() {
    if (confirm('Are you sure you want to sign out?')) {
      this.service.signOut();
      this.router.navigate(['/']);
    }
  }
}
