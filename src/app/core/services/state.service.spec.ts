import { TestBed } from '@angular/core/testing';
import { StateService } from './state.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
describe('StateService', () => {
  let service: StateService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StateService],
    });

    service = TestBed.get(StateService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<States[]>', () => {
    const dummyStates = [
      { stateCode: 'AP' },
      { stateCode: 'HP' },
      { stateCode: 'MP' },
    ];

    service.getStateList().subscribe((states) => {
      expect(states.length).toBe(3);
      expect(states).toEqual(dummyStates);
    });

    const req = httpMock.expectOne(`${service.stateUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyStates);
  });

  it('should return state details', () => {
    service.getStateDetailsList().subscribe((data) => {
      expect(data).toBeDefined();
    });
    const req = httpMock.expectOne(`${service.stateDetailsUrl}`);
    expect(req.request.method).toBe('GET');
    // req.flush(dummyStates);
  });
});
