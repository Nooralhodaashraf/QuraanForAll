import { Component } from '@angular/core';
import { CoursesHeader } from './component/courses-header/courses-header';
import { Start } from './component/start/start';
import { Studies } from './component/studies/studies';
import { KidsCourse } from './component/kids-course/kids-course';
import { Knowladge } from './component/knowladge/knowladge';
import { ItWorks } from './component/it-works/it-works';
import { LJourny } from './component/l-journy/l-journy';

@Component({
  selector: 'app-courses',
  imports: [CoursesHeader, Start, Studies, KidsCourse, Knowladge, ItWorks, LJourny],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {}

