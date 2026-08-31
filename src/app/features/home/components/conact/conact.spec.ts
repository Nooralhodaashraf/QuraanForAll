import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conact } from './conact';

describe('Conact', () => {
  let component: Conact;
  let fixture: ComponentFixture<Conact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conact],
    }).compileComponents();

    fixture = TestBed.createComponent(Conact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
