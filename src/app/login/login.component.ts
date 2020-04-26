import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../shared/interfaces/login';
import { LoginService } from '../core/services/login.service';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: Login;
  constructor(private loginService: LoginService) {
    this.user = { id: 0, username: '', password: '' };
  }

  ngOnInit(): void {}

  save(userForm: NgForm) {
    // console.log(userForm.form);
    // console.log(JSON.stringify(userForm.value));
    // this.loginService.getUsers().subscribe((data: any) => {
    //   console.log(data);
    // });
    this.loginService.findUser(userForm.value).subscribe((data: any) => {
      if (data.length > 0) {
        console.log('present');
        // this.router.navigate(['dashboard']);
      }
      console.log(data.length);
    });
  }
}
