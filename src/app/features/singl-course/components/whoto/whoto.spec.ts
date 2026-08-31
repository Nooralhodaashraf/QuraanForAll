import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whoto } from './whoto';

describe('Whoto', () => {
  let component: Whoto;
  let fixture: ComponentFixture<Whoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whoto],
    }).compileComponents();

    fixture = TestBed.createComponent(Whoto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
