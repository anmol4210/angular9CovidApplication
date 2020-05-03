import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { newsRoutes } from '../news-routing.module';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let location: Location;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(newsRoutes),
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        FormsModule,
      ],
      declarations: [NewsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    fixture.detectChanges();
  });
  afterEach(() => {
    localStorage.clear();
  });

  it('navigate to "add" takes you to /add', async(() => {
    localStorage.setItem('validUser', 'True');
    router.navigate(['/add']).then(() => {
      expect(location.path()).toBe('/add');
    });
  }));

  it('navigate to "details" takes you to /details/:id', async(() => {
    // localStorage.setItem('validUser', 'True');
    router.navigate(['/details/1']).then(() => {
      expect(location.path()).toBe('/details/1');
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain router outlet', () => {
    const tag = fixture.debugElement.query(By.css('router-outlet'));
    expect(tag).toBeTruthy();
  });
});
