import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsCourse } from './kids-course';

describe('KidsCourse', () => {
  let component: KidsCourse;
  let fixture: ComponentFixture<KidsCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsCourse],
    }).compileComponents();

    fixture = TestBed.createComponent(KidsCourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
