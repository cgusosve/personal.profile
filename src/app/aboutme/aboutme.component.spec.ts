import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AboutmeComponent } from './aboutme.component';

describe('AboutmeComponent', () => {
  let component: AboutmeComponent;
  let fixture: ComponentFixture<AboutmeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
