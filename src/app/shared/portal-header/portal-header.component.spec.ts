import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalHeaderComponent } from './portalheader.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('PortalHeaderComponent', () => {
  let component: PortalHeaderComponent;
  let fixture: ComponentFixture<PortalHeaderComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ToastrModule.forRoot()],
      declarations: [PortalHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('.log-btn'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain covid19 in the header toolbar', () => {
    const headerText = 'Covid19';
    const component = fixture.debugElement.componentInstance;
    expect(component.title).toContain(headerText);
  });

  it('check login button', () => {
    expect(el.nativeElement.textContent.trim()).toBe('Login');
  });
});
