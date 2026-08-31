import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPhli } from './teaching-phli';

describe('TeachingPhli', () => {
  let component: TeachingPhli;
  let fixture: ComponentFixture<TeachingPhli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingPhli],
    }).compileComponents();

    fixture = TestBed.createComponent(TeachingPhli);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
