import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyForJourney } from './ready-for-journey';

describe('ReadyForJourney', () => {
  let component: ReadyForJourney;
  let fixture: ComponentFixture<ReadyForJourney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadyForJourney],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadyForJourney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
