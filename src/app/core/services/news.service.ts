import { Injectable } from '@angular/core';
import { News } from '../../shared/interfaces/news';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiURL: string = 'api/newsDetails';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<any>(this.apiURL);
  }
  findNews(newsId: number): Observable<News> {
    // console.log(newsId);
    return this.http
      .get<News>(`${this.apiURL}/${newsId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured', error.error.message);
    } else {
      console.log(
        `Backend returned code ${error.status}, ` + `body was: ${error.error} `
      );
    }
    return throwError('Something Bad Happened');
  }
}
