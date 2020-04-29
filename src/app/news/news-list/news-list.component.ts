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
  loggedIn: boolean = false;
  loaddingData: boolean = true;
  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.newsDetails = data;
      this.loaddingData = false;
      // console.log(this.newsDetails);
    });
    if (localStorage.getItem('validUser') == 'True') {
      this.loggedIn = true;
    }
  }
}
