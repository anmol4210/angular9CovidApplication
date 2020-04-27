import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/approuting/app-routing.module';
import { AppComponent } from './app.component';
import { PortalHeaderComponent } from './shared/portal-header/portalheader.component';
import { PortalFooterComponent } from './shared/portal-footer/portalfooter.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { LoginInMemoryDataService } from './core/services/login-in-memory-data.service';
import { PrecautionsModule } from 'src/app/precautions/precautions.module';
import { LoginModule } from 'src/app/login/login.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginInMemoryDataService } from './core/services/login-in-memory-data.service';

// import {DashboardModule} from 'src/app/dashboard/dashboard.module'
@NgModule({
  declarations: [AppComponent, PortalHeaderComponent, PortalFooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(LoginInMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
