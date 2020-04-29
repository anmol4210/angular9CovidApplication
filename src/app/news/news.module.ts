import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsRoutingModule } from './news-routing.module';
import { AddNewsModule } from './add-news/add-news.module';
@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule],
})
export class NewsModule {}
