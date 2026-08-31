import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSec } from './welcome-sec';

describe('WelcomeSec', () => {
  let component: WelcomeSec;
  let fixture: ComponentFixture<WelcomeSec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeSec],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeSec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
