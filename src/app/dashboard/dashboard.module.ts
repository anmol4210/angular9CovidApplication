import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashBoardRoutingModule],
})
export class DashboardModule {}
