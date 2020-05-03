import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { routes } from './core/approuting/app-routing.module';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, NgForm } from '@angular/forms';
describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        FormsModule,
      ],

      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('navigate to "home" takes you to /home', async(() => {
    router.navigate(['/home']).then(() => {
      expect(location.path()).toBe('/home');
    });
  }));

  it('navigate to "" redirects you to /home', async(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/home');
    });
  }));

  it('navigate to "precautions" redirects you to /precautions', async(() => {
    router.navigate(['/precautions']).then(() => {
      expect(location.path()).toBe('/precautions');
    });
  }));

  it('navigate to "login" redirects you to /login', async(() => {
    router.navigate(['/login']).then(() => {
      expect(location.path()).toBe('/login');
    });
  }));

  it('navigate to "news" takes you to /news', async(() => {
    router.navigate(['/news']).then(() => {
      expect(location.path()).toBe('/news');
    });
  }));

  it('should contain router outlet', () => {
    const tag = fixture.debugElement.query(By.css('router-outlet'));
    expect(tag).toBeTruthy();
  });
});
