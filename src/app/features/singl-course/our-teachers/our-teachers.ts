import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CoursesId, CoursesInt } from '../../../core/model/courses';
import { Courses } from '../../../core/service/courses';

@Component({
  selector: 'app-our-teachers',
  imports: [],
  templateUrl: './our-teachers.html',
  styleUrl: './our-teachers.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurTeachers {
  private readonly courses = inject(Courses);

  idList: CoursesId[] = [];
  courseList: CoursesInt[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.getCourses();
  }

  teachers = [
    {
      name: 'Ahmed Ali',
      image: '',
      job: 'Front-End Developer',
      description: 'Experienced front-end developer specialized in Angular and TypeScript.',
    },
    {
      name: 'Sara Mohamed',
      image: '',
      job: 'UI/UX Designer',
      description:
        'Creative UI/UX designer focused on creating simple and user-friendly interfaces.',
    },
    {
      name: 'Ahmed Ali',
      image: '',
      job: 'Front-End Developer',
      description: 'Experienced front-end developer specialized in Angular and TypeScript.',
    },
    {
      name: 'Sara Mohamed',
      image: '',
      job: 'UI/UX Designer',
      description:
        'Creative UI/UX designer focused on creating simple and user-friendly interfaces.',
    },
    {
      name: 'Ahmed Ali',
      image: '',
      job: 'Front-End Developer',
      description: 'Experienced front-end developer specialized in Angular and TypeScript.',
    },
    {
      name: 'Sara Mohamed',
      image: '',
      job: 'UI/UX Designer',
      description:
        'Creative UI/UX designer focused on creating simple and user-friendly interfaces.',
    },
    {
      name: 'Ahmed Ali',
      image: '',
      job: 'Front-End Developer',
      description: 'Experienced front-end developer specialized in Angular and TypeScript.',
    },
    {
      name: 'Sara Mohamed',
      image: '',
      job: 'UI/UX Designer',
      description:
        'Creative UI/UX designer focused on creating simple and user-friendly interfaces.',
    },
    {
      name: 'Ahmed Ali',
      image: '',
      job: 'Front-End Developer',
      description: 'Experienced front-end developer specialized in Angular and TypeScript.',
    },
    {
      name: 'Sara Mohamed',
      image: '',
      job: 'UI/UX Designer',
      description:
        'Creative UI/UX designer focused on creating simple and user-friendly interfaces.',
    },
    {
      name: 'Ahmed Ali',
      image: '',
      job: 'Front-End Developer',
      description: 'Experienced front-end developer specialized in Angular and TypeScript.',
    },
    {
      name: 'Sara Mohamed',
      image: '',
      job: 'UI/UX Designer',
      description:
        'Creative UI/UX designer focused on creating simple and user-friendly interfaces.',
    },
    {
      name: 'Omar Hassan',
      image: '',
      job: 'Back-End Developer',
      description: 'Back-end developer experienced in building scalable APIs and web applications.',
    },
    {
      name: 'Mariam Ahmed',
      image: '',
      job: 'Angular Instructor',
      description: 'Angular instructor who enjoys teaching modern web development techniques.',
    },
  ];

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
