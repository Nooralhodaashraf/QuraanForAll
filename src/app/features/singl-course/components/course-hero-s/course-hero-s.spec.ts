import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHeroS } from './course-hero-s';

describe('CourseHeroS', () => {
  let component: CourseHeroS;
  let fixture: ComponentFixture<CourseHeroS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseHeroS],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseHeroS);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
