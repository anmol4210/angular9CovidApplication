import { TestBed } from '@angular/core/testing';
import { News } from '../../shared/interfaces/news';
import { NewsService } from './news.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all news', () => {
    service.getNews().subscribe((data) => {
      expect(data).toBeDefined();
    });
  });
  it('get particular new', () => {
    service.findNews(1).subscribe((data) => {
      expect(data).toBeDefined();
    });
  });
});
