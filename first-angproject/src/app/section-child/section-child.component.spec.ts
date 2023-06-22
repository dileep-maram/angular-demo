import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionChildComponent } from './section-child.component';

describe('SectionChildComponent', () => {
  let component: SectionChildComponent;
  let fixture: ComponentFixture<SectionChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionChildComponent]
    });
    fixture = TestBed.createComponent(SectionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
