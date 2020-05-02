import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StateListComponent } from './statelist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StateService } from '../../core/services/state.service';
import { of } from 'rxjs';
describe('StateListComponent', () => {
  let component: StateListComponent;
  let fixture: ComponentFixture<StateListComponent>;
  let service: StateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StateListComponent],
      imports: [HttpClientTestingModule],
      providers: [StateService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(StateService);

    fixture.detectChanges();
  });

  it('should call service.findNews', async(() => {
    spyOn(service, 'getStateList').and.returnValue(
      of(<any>{
        cases_time_series: [{ dailyconfirmed: '1' }],
        statewise: [
          {
            recovered: '10828',
            state: 'Total',
            statecode: 'TT',
          },
        ],
      })
    );

    component.ngOnInit();
    fixture.whenStable().then(() => {
      // expect(component.ngOnInit).toBeFalsy();
      expect(service.getStateList).toHaveBeenCalled();
      expect(component.loaddingData).toBeFalse();
      expect(component.states.length).toBe(1);
    });
  }));

  it('check loaddingData default Value', () => {
    expect(component.loaddingData).toBeTruthy();
  });
  it('service should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
