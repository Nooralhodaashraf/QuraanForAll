import { Component } from '@angular/core';
import { CourseHeroS } from './components/course-hero-s/course-hero-s';
import { Learn } from './components/learn/learn';
import { Whoto } from './components/whoto/whoto';
import { CourseWork } from './components/course-work/course-work';
import { PricingPlans } from './components/pricing-plans/pricing-plans';
import { Feedback } from '../home/components/feedback/feedback';
import { FeedbackCourse } from './components/feedback-course/feedback-course';
import { OurTeachers } from './our-teachers/our-teachers';
import { ReadyForJourney } from './ready-for-journey/ready-for-journey';

@Component({
  selector: 'app-singl-course',
  imports: [
    CourseHeroS,
    Learn,
    Whoto,
    CourseWork,
    PricingPlans,
    Feedback,
    FeedbackCourse,
    OurTeachers,
    ReadyForJourney,
  ],
  templateUrl: './singl-course.html',
  styleUrl: './singl-course.css',
})
export class SinglCourse {}
