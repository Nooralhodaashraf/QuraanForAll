import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouteUs } from './aboute-us';

describe('AbouteUs', () => {
  let component: AbouteUs;
  let fixture: ComponentFixture<AbouteUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbouteUs],
    }).compileComponents();

    fixture = TestBed.createComponent(AbouteUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
