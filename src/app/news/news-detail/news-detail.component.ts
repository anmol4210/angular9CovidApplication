import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../core/services/news.service';
import { News } from 'src/app/shared/interfaces/news';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  newsId: number;
  news: News = {
    id: 0,
    title: '',
    summary: '',
    description: '',
    full_news: '',
    image_url: '',
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.newsId = this.activatedRoute.snapshot.params.newsId;
    this.newsService.findNews(this.newsId).subscribe((data: News) => {
      // console.log(data);
      if (data.id > 0) {
        this.news = data;
      }
    });
  }
}
