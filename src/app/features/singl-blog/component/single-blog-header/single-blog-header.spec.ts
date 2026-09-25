import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogHeader } from './single-blog-header';

describe('SingleBlogHeader', () => {
  let component: SingleBlogHeader;
  let fixture: ComponentFixture<SingleBlogHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBlogHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleBlogHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
