import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalFooterComponent } from './portalfooter.component';
import { By } from '@angular/platform-browser';

describe('PortalFooterComponent', () => {
  let component: PortalFooterComponent;
  let fixture: ComponentFixture<PortalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [PortalFooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain anmol in the footer toolbar', () => {
    const footerText = 'Anmol';
    const footerToolbar = fixture.debugElement.query(By.css('.footer'));
    expect(footerToolbar.nativeElement.textContent).toContain(footerText);
  });
  it('should contain div tag', () => {
    const tag = fixture.debugElement.query(By.css('div'));
    expect(tag).toBeTruthy();
  });
});
