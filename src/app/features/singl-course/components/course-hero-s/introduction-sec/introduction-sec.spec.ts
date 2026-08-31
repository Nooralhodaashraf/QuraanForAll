import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionSec } from './introduction-sec';

describe('IntroductionSec', () => {
  let component: IntroductionSec;
  let fixture: ComponentFixture<IntroductionSec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionSec],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionSec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
