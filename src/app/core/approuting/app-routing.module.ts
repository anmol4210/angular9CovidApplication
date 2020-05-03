import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PrecautionsComponent } from 'src/app/precautions/precautions.component';
import { LoginComponent } from 'src/app/login/login.component';
import { PageNotFoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('../../news/news.module').then((m) => m.NewsModule),
  },
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
