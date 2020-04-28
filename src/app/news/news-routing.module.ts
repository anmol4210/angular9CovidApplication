import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListModule } from './news-list/new-list.module';
// import {} from './news-detail';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
export const newsRoutes: Routes = [
  {
    path: '',
    component: NewsListComponent,
  },
  {
    path: 'details/:newsId',
    component: NewsDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(newsRoutes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
