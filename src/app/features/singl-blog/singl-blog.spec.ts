import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglBlog } from './singl-blog';

describe('SinglBlog', () => {
  let component: SinglBlog;
  let fixture: ComponentFixture<SinglBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglBlog],
    }).compileComponents();

    fixture = TestBed.createComponent(SinglBlog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
