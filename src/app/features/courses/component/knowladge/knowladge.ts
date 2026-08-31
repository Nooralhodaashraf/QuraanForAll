import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Courses } from '../../../../core/service/courses';
import { CoursesId, CoursesInt } from '../../../../core/model/courses';

@Component({
  selector: 'app-knowladge',
  imports: [RouterLink],
  templateUrl: './knowladge.html',
  styleUrl: './knowladge.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Knowladge implements OnInit {
  private readonly courses = inject(Courses);

  idList: CoursesId[] = [];
  courseList: CoursesInt[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.isLoading = true;
    this.courses.getAllCourses().subscribe({
      next: (res) => {
        this.courseList = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching knowledge courses:', err);
        this.isLoading = false;
      },
    });
  }

  reload(): void {
    this.getCourses();
  }
}

