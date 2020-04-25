import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { StateListModule } from './state-list/statelist.module';
import { StateDetailsModule } from './state-details/statedetails.module';
import { StateListComponent } from './state-list/statelist.component';
import { StateDetailsComponent } from './state-details/statedetails.component';

export const dasboardRoutes: Routes = [
  {
    path: '',
    component: StateListComponent,
  },
  {
    path: ':stateName',
    component: StateDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(dasboardRoutes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule {}
