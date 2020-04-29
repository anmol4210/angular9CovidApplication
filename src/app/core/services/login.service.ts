import { Injectable } from '@angular/core';
import { Login } from '../../shared/interfaces/login';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { LoginModule } from '../../login/login.module';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiURL: string = 'api/loginDetail';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Login[]> {
    return this.http.get<any>(this.apiURL);
  }

  findUser(loginDetails: Login): Observable<Login[]> {
    return this.http
      .get<Login[]>(
        `${this.apiURL}/?username=^${loginDetails.username}$&&password=^${loginDetails.password}$`
      )
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
