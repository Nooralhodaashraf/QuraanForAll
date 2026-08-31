import { Component } from '@angular/core';
import { HeroSec } from './components/hero-sec/hero-sec';
import { WelcomeSec } from './components/welcome-sec/welcome-sec';
import { CourseSec } from './components/course-sec/course-sec';
import { Female } from './components/female/female';
import { WhyUs } from './components/why-us/why-us';
import { Feedback } from './components/feedback/feedback';
import { AboutUs } from '../about-us/about-us';
import { AbouteUs } from './components/aboute-us/aboute-us';
import { Conact } from './components/conact/conact';
import { LatestBlog } from './components/latest-blog/latest-blog';

@Component({
  selector: 'app-home',
  imports: [HeroSec, WelcomeSec, CourseSec, Female, WhyUs, Feedback, AbouteUs, Conact, LatestBlog],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
