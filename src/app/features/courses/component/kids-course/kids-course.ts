import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Courses } from '../../../../core/service/courses';
import { CoursesInt } from '../../../../core/model/courses';

@Component({
  selector: 'app-kids-course',
  imports: [RouterLink],
  templateUrl: './kids-course.html',
  styleUrl: './kids-course.css',
})
export class KidsCourse implements OnInit {
  private readonly courses = inject(Courses);
  coursItem: CoursesInt | null = null;
  courseId!: number;

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    this.courses.getAllCourses().subscribe({
      next: (courses) => {
        if (courses && courses.length > 0) {
          // Find a kids course if available, or take the first one
          const kidsCourse = courses.find((c) =>
            c.title?.rendered?.toLowerCase().includes('kid')
          );
          this.coursItem = kidsCourse || courses[0];
        }
      },
      error: (err) => {
        console.error('Error fetching kids course:', err);
      },
    });
  }
}

