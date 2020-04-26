import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginInMemoryDataService } from '../core/services/login-in-memory-data.service';

import { LoginService } from '../core/services/login.service';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(LoginInMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  exports: [FormsModule, LoginComponent],
})
export class LoginModule {}
