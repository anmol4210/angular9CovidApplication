import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../core/services/login.service';
import { LoginComponent } from './login.component';
// import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, NgForm } from '@angular/forms';
import { doesNotReject } from 'assert';
import { Observable, of } from 'rxjs';
import { Login } from '../shared/interfaces/login';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        FormsModule,
      ],
      providers: [LoginService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    service = TestBed.get(LoginService);
    fixture.detectChanges();
    // localStorage.clear();
  });
  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call service.findUser with correct credentials', async(() => {
    inject([LoginService], (injectService: LoginService) => {
      // spyOn(injectService, 'findUser').and.returnValue(
      //   of(<Login[]>[{ username: 'anmol' }])
      // );
      const testForm = <NgForm>{
        value: {
          username: 'anmol',
          password: 'anmol',
        },
      };

      component.save(testForm);
      fixture.whenStable().then(() => {
        expect(localStorage.getItem('validUser')).toBe('True');
        expect(injectService.findUser).toHaveBeenCalled();
      });
    });
  }));

  it('should call service.findUser with incorrect credentials', async(() => {
    inject([LoginService], (injectService: LoginService) => {
      // spyOn(injectService, 'findUser').and.returnValue(
      //   of(<Login[]>[{ username: 'anmol' }])
      // );
      const testForm = <NgForm>{
        value: {
          username: 'anmol',
          password: 'admin',
        },
      };

      component.save(testForm);
      fixture.whenStable().then(() => {
        expect(localStorage.getItem('validUser')).toBe('False');
        expect(injectService.findUser).toHaveBeenCalled();
      });
    });
  }));
});
