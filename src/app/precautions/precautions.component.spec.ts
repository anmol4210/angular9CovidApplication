import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PrecautionsComponent } from './precautions.component';

describe('PrecautionsComponent', () => {
  let component: PrecautionsComponent;
  let fixture: ComponentFixture<PrecautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrecautionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check precautions data', () => {
    expect(component.precautions.length).toBeGreaterThan(2);
  });

  it('Check presence of li', () => {
    const tag = fixture.debugElement.query(By.css('li'));
    expect(tag).toBeTruthy();
  });
});
