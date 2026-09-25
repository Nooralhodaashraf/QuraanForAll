import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContant } from './blog-contant';

describe('BlogContant', () => {
  let component: BlogContant;
  let fixture: ComponentFixture<BlogContant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogContant],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogContant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
