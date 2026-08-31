import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRequestForm } from './course-request-form';

describe('CourseRequestForm', () => {
  let component: CourseRequestForm;
  let fixture: ComponentFixture<CourseRequestForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseRequestForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseRequestForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
