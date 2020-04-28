import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Login } from '../../shared/interfaces/login';
import { News } from '../../shared/interfaces/news';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginInMemoryDataService implements InMemoryDbService {
  createDb() {
    const loginDetail: Login[] = [
      { id: 1, username: 'anmol', password: 'anmol' },
      { id: 2, username: 'admin', password: 'admin' },
    ];

    const newsDetails: News[] = [
      {
        id: 1,
        title: 'title',
        description: 'description',
        summary: 'summary',
        full_news: 'full news',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBpZNdDwKdaklUMXv4VfFSdq583D655eUkd13t4Ih22w_EvZ9P&usqp=CAU',
      },
      {
        id: 2,
        title: 'title',
        description: 'description',
        summary: 'summary',
        full_news: 'full news',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBpZNdDwKdaklUMXv4VfFSdq583D655eUkd13t4Ih22w_EvZ9P&usqp=CAU',
      },
    ];
    return { loginDetail, newsDetails };
  }

  genId(newsDetails: News[]): number {
    return newsDetails.length > 0
      ? Math.max(...newsDetails.map((news) => news.id)) + 1
      : 11;
  }
  // genId(loginDetail: newsDetails[]): number {
  //   return loginDetail.length > 0
  //     ? Math.max(...loginDetail.map((user) => user.id)) + 1
  //     : 11;
  // }
  constructor() {}
}
