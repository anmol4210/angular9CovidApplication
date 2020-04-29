import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './portalheader.component.html',
  styleUrls: ['./portalheader.component.css'],
})
export class PortalHeaderComponent implements OnInit, AfterContentChecked {
  title: String = 'Covid19 Updates';
  validUser: boolean = false;
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    if (localStorage.getItem('validUser') == 'True') {
      this.validUser = true;
    }
  }
  ngAfterContentChecked(): void {
    // console.log('content checked');
    if (localStorage.getItem('validUser') == 'True') {
      this.validUser = true;
    }
  }

  // ngAfterViewChecked(): void {
  //   console.log('view checked');
  // }

  // ngDoCheck(): void {
  //   console.log('do check');
  // }
  logout() {
    this.validUser = false;
    localStorage.clear();
    this.toastr.success('Logged Out Successfully!', 'Covid19', {
      timeOut: 1000,
    });
    this.router.navigate(['home']);
  }
}
