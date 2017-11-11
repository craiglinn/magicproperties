import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('we are here:' + this.userName);
    if ( this.userName === 'landlord' ) {
      this.router.navigateByUrl('landlordDashboard');
    }
     if ( this.userName === 'admin' ) {
      this.router.navigateByUrl('adminDashboard');
  }
  }
}
