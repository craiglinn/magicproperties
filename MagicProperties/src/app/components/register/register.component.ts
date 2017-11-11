import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform: any;

  firstName: string;
  lastName: string;
  email: string;
  telephoneNumber: number;
  mobileNumber: number;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('testing!');
    if (this.myform.valid) {
    console.log('Form Submitted!');
  }
  }
}
