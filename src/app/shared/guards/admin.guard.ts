import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}
  canActivate(): boolean {
    if (
      localStorage.getItem('validUser') === null ||
      localStorage.getItem('validUser') === undefined ||
      localStorage.getItem('validUser') === 'false'
    ) {
      this.router.navigate(['/login']);
      this.toastr.warning('Please Login in to add news', 'Covid19 Updates');
      return false;
    }
    return true;
  }
}
