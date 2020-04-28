import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './portalheader.component.html',
})
export class PortalHeaderComponent implements OnInit, AfterContentChecked {
  title: String = 'Covid19 Updates';
  validUser: boolean = false;
  constructor() {}

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
  }
}
