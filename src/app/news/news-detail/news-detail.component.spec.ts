import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsDetailComponent } from './news-detail.component';
import { NewsService } from '../../core/services/news.service';
import { Observable, of } from 'rxjs';
import { News } from 'src/app/shared/interfaces/news';

describe('NewsDetailComponent', () => {
  let component: NewsDetailComponent;
  let fixture: ComponentFixture<NewsDetailComponent>;
  let service: NewsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [NewsDetailComponent],
      providers: [NewsService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.get(NewsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.findNews', async(() => {
    spyOn(service, 'findNews').and.returnValue(of(<News>{ title: 'title' }));

    component.ngOnInit();
    fixture.whenStable().then(() => {
      // expect(component.ngOnInit).toBeFalsy();
      expect(service.findNews).toHaveBeenCalled();
    });
  }));

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });
});
