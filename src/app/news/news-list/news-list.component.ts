import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import { News } from '../../shared/interfaces/news';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  constructor(private newsService: NewsService) {}
  newsDetails: News[];

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.newsDetails = data;
      // console.log(this.newsDetails);
    });
  }
}
