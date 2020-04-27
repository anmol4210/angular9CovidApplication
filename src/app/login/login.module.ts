import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginService } from '../core/services/login.service';
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [],
  exports: [FormsModule, LoginComponent],
})
export class LoginModule {}
