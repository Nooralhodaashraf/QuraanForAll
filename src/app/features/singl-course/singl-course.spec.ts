import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglCourse } from './singl-course';

describe('SinglCourse', () => {
  let component: SinglCourse;
  let fixture: ComponentFixture<SinglCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglCourse],
    }).compileComponents();

    fixture = TestBed.createComponent(SinglCourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
