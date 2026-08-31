import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LJourny } from './l-journy';

describe('LJourny', () => {
  let component: LJourny;
  let fixture: ComponentFixture<LJourny>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LJourny],
    }).compileComponents();

    fixture = TestBed.createComponent(LJourny);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
