import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { StateListModule } from './state-list/statelist.module';
import { StateListComponent } from './state-list/statelist.component';

export const dasboardRoutes: Routes = [
  {
    path: '',
    component: StateListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(dasboardRoutes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule {}
