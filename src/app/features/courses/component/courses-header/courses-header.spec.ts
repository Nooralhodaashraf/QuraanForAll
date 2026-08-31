import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesHeader } from './courses-header';

describe('CoursesHeader', () => {
  let component: CoursesHeader;
  let fixture: ComponentFixture<CoursesHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
