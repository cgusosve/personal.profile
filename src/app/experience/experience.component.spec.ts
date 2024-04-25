import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
