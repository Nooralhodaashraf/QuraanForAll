import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWork } from './course-work';

describe('CourseWork', () => {
  let component: CourseWork;
  let fixture: ComponentFixture<CourseWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseWork],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
