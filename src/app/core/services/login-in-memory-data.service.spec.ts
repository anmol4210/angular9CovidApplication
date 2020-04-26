import { TestBed } from '@angular/core/testing';

import { LoginInMemoryDataService } from './login-in-memory-data.service';

describe('LoginInMemoryDataService', () => {
  let service: LoginInMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginInMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
