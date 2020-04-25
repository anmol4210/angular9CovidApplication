import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { DashboardComponent } from 'src/app/dashboard/dashboard/dashboard.component';
// import { DashboardModule } from 'src/app/dashboard/dashboard.module';
// import { dasboardRoutes } from 'src/app/dashboard/dashboard-routing.module';
import { NewsComponent } from 'src/app/news/news.component';
import { PrecautionsComponent } from 'src/app/precautions/precautions.component';
import { LoginComponent } from 'src/app/login/login.component';
import { PageNotFoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
    // component: DashboardComponent,
    // children: [...dasboardRoutes],
  },
  { path: 'news', component: NewsComponent },
  { path: 'precautions', component: PrecautionsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
