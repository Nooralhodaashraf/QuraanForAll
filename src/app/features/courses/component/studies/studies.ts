import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Courses } from '../../../../core/service/courses';
import { CoursesId, CoursesInt } from '../../../../core/model/courses';

@Component({
  selector: 'app-studies',
  imports: [RouterLink],
  templateUrl: './studies.html',
  styleUrl: './studies.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Studies implements OnInit {
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
        console.error('Error fetching courses:', err);
        this.isLoading = false;
      },
    });
  }

  reload(): void {
    this.getCourses();
  }
}

