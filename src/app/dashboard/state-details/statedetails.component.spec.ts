import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import { StateDetailsComponent } from './statedetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StateService } from '../../core/services/state.service';
import { of } from 'rxjs';

describe('StateDetailsComponent', () => {
  let component: StateDetailsComponent;
  let fixture: ComponentFixture<StateDetailsComponent>;
  let service: StateService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StateDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [StateService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDetailsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(StateService);
    fixture.detectChanges();
  });

  it('should call service.findNews', async(() => {
    inject([StateService], (injectService: StateService) => {
      spyOn(service, 'getStateDetailsList').and.returnValue(
        of(<any>{
          Assam: {
            districtData: {
              Bongaigaon: {
                active: 5,
                confirmed: 5,
                deceased: 0,
              },
            },
            statecode: 'AS',
          },
        })
      );

      // component.ngOnInit();
      fixture.whenStable().then(() => {
        // expect(component.ngOnInit).toBeFalsy();
        expect(service.getStateDetailsList).toHaveBeenCalled();
        // expect(component.loaddingData).toBeFalse();
        //   expect(component.states.length).toBe(1);
      });
    });
  }));

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
