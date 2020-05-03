import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
// import { FormBuilder } from '@angular/forms';
import { AddNewsComponent } from './add-news.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsService } from '../../core/services/news.service';
import { Observable, of } from 'rxjs';
import { News } from 'src/app/shared/interfaces/news';

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;
  let service: NewsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
      ],
      providers: [NewsService],
      declarations: [AddNewsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(NewsService);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should call service.addNews', async(() => {
    inject([NewsService], (injectService: NewsService) => {
      spyOn(injectService, 'addNews').and.returnValue(
        of(<News>{ title: 'title' })
      );

      component.save();
      fixture.whenStable().then(() => {
        // expect(component.ngOnInit).toBeFalsy();
        expect(injectService.addNews).toHaveBeenCalled();
      });
    });
  }));

  it('check default image url and title validity', () => {
    // component.ngOnInit();
    let title = component.newsForm.controls['title'];
    let imageUrl = component.newsForm.controls['image_url'];
    expect(title.valid).toBeFalsy();
    expect(imageUrl.value).toBe('assets/corona.jpg');

    let errors = {};
    errors = title.errors || {};
    expect(errors['required']).toBeTruthy();

    title.setValue('Covid19 News');
    errors = title.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('check form validity', () => {
    expect(component.newsForm.valid).toBeFalsy();
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
