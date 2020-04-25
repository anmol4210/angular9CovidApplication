import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { State } from '../../shared/interfaces/state';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class StateService {
  stateUrl: string = 'https://api.covid19india.org/data.json';
  stateDetailsUrl: string =
    'https://api.covid19india.org/state_district_wise.json';
  constructor(private http: HttpClient) {}

  getStateList(): Observable<any> {
    return this.http.get<any>(this.stateUrl);
  }

  getStateDetailsList(): Observable<any> {
    return this.http.get<any>(this.stateDetailsUrl);
  }
}
