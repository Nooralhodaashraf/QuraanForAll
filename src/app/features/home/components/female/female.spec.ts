import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Female } from './female';

describe('Female', () => {
  let component: Female;
  let fixture: ComponentFixture<Female>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Female],
    }).compileComponents();

    fixture = TestBed.createComponent(Female);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
