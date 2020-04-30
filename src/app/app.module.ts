import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './core/approuting/app-routing.module';
import { AppComponent } from './app.component';
import { PortalHeaderComponent } from './shared/portal-header/portalheader.component';
import { PortalFooterComponent } from './shared/portal-footer/portalfooter.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginInMemoryDataService } from './core/services/login-in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PrecautionsModule } from 'src/app/precautions/precautions.module';
import { LoginModule } from 'src/app/login/login.module';

@NgModule({
  declarations: [AppComponent, PortalHeaderComponent, PortalFooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(LoginInMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
