import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsHero } from './blogs-hero';

describe('BlogsHero', () => {
  let component: BlogsHero;
  let fixture: ComponentFixture<BlogsHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsHero],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogsHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
