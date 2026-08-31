import { Component, inject, OnInit } from '@angular/core';
import { Courses } from '../../../../core/service/courses';
import { CoursesId, CoursesInt } from '../../../../core/model/courses';

@Component({
  selector: 'app-course-sec',
  imports: [],
  templateUrl: './course-sec.html',
  styleUrl: './course-sec.css',
})
export class CourseSec implements OnInit {
  private readonly courses = inject(Courses);

  idList: CoursesId[] = [];
  courseList: CoursesInt[] = [];
  item: any;

  ngOnInit(): void {
    this.getCourses();
  }

  getcourseList(id: any) {
    this.courses.getApidata(id).subscribe({
      next: (res) => {
        console.log(res);
        this.courseList.push(res);
        console.log(this.courseList);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getCourses() {
    this.courses.getApiId().subscribe({
      next: (res) => {
        console.log(res);
        this.idList = res;
        console.log(this.idList);
        console.log(this.idList[0]);

        for (let i = 0; i < this.idList.length; i++) {
          this.getcourseList(this.idList[i].id);
        }
      },
      error: (err) => console.log(err),
    });
  }

  reload() {
    window.location.reload();
  }
}
