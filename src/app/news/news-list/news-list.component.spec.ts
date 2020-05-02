import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { NewsListComponent } from './news-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsService } from '../../core/services/news.service';
import { Observable, of } from 'rxjs';
import { News } from 'src/app/shared/interfaces/news';
describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let service: NewsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NewsListComponent],
      providers: [NewsService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(NewsService);
    // component.ngOnInit();
    fixture.detectChanges();
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

  it('should call service.getNews', async(() => {
    spyOn(service, 'getNews').and.returnValue(of(<News[]>[{ title: 'title' }]));

    component.ngOnInit();
    fixture.whenStable().then(() => {
      expect(component.loaddingData).toBeFalsy();
      expect(service.getNews).toHaveBeenCalled();
    });
  }));

  it('is user authenticated', () => {
    localStorage.setItem('validUser', 'True');
    expect(component.isAuthenticated()).toBeTruthy();
    // expect(localStorage.getItem('validUser')).toBe('True');
  });
  it('is user not authenticated', () => {
    expect(component.isAuthenticated()).toBeFalsy();
  });
});
