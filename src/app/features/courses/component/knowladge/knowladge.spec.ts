import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowladge } from './knowladge';

describe('Knowladge', () => {
  let component: Knowladge;
  let fixture: ComponentFixture<Knowladge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Knowladge],
    }).compileComponents();

    fixture = TestBed.createComponent(Knowladge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
