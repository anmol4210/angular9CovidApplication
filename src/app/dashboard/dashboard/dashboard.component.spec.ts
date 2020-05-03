import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { dasboardRoutes } from '../dashboard-routing.module';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(dasboardRoutes),
        HttpClientTestingModule,
      ],
      declarations: [DashboardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should contain router outlet', () => {
    const tag = fixture.debugElement.query(By.css('router-outlet'));
    expect(tag).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "" takes you to /', async(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/');
    });
  }));

  // it('navigate to "/:id" takes you to /id', async(() => {
  //   fixture.whenStable().then(() => {
  //     router.navigate(['/1']).then(() => {
  //       expect(location.path()).toBe('/1');
  //     });
  //   });
  // }));
});
