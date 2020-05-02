import { TestBed, inject, async } from '@angular/core/testing';
import { LoginService } from './login.service';
import { Login } from '../../shared/interfaces/login';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all users', () => {
    service.getUsers().subscribe((data) => {
      expect(data.length).toBe(2);
    });
  });

  it('find user', () => {
    service
      .findUser(<Login>{ username: 'anmol', password: 'anmol' })
      .subscribe((data) => {
        expect(data.length).toBe(1);
      });
  });

  // it('expects service to fetch data with proper sorting', inject(
  //   [HttpTestingController, LoginService],
  //   (httpMock: HttpTestingController, service: LoginService) => {
  //     // We call the service
  //     service.getUsers().subscribe((data) => {
  //       expect(data.length).toBe(2);
  //     });
  //     // We set the expectations for the HttpClient mock
  //     const req = httpMock.expectOne('https://localhost:4200/api/loginDetail');
  //     expect(req.request.method).toEqual('GET');
  //     // Then we set the fake data to be returned by the mock
  //     req.flush({ data: [{ username: 'anmol' }, { username: 'admin' }] });
  //   }
  // ));
});
