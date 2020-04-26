import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Login } from '../../shared/interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class LoginInMemoryDataService implements InMemoryDbService {
  createDb() {
    const loginDetail: Login[] = [
      { id: 1, username: 'anmol', password: 'anmol' },
      { id: 2, username: 'admin', password: 'admin' },
    ];
    return { loginDetail };
  }

  genId(loginDetail: Login[]): number {
    return loginDetail.length > 0
      ? Math.max(...loginDetail.map((user) => user.id)) + 1
      : 11;
  }
  constructor() {}
}
