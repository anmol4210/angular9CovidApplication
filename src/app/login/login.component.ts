import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../shared/interfaces/login';
import { LoginService } from '../core/services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: Login;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {
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
        this.toastr.success('Logged In Successfully!', 'Covid19');
        // console.log('present');
        this.router.navigate(['home']);
        localStorage.setItem('validUser', 'True');
      } else {
        this.toastr.warning('Incorrect username or password!', 'Covid19');
      }
      // console.log(data.length);
    });
  }
}
