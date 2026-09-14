import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCourse } from './feedback-course';

describe('FeedbackCourse', () => {
  let component: FeedbackCourse;
  let fixture: ComponentFixture<FeedbackCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackCourse],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackCourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
