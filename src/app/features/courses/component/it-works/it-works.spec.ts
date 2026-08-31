import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItWorks } from './it-works';

describe('ItWorks', () => {
  let component: ItWorks;
  let fixture: ComponentFixture<ItWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItWorks],
    }).compileComponents();

    fixture = TestBed.createComponent(ItWorks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
