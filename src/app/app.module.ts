import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/approuting/app-routing.module';
import { AppComponent } from './app.component';
import { PortalHeaderComponent } from './shared/portal-header/portalheader.component';
import { PortalFooterComponent } from './shared/portal-footer/portalfooter.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, PortalHeaderComponent, PortalFooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
