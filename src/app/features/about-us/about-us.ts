import { Component } from '@angular/core';
import { Header } from './component/header/header';
import { Vision } from './component/vision/vision';
import { Teachers } from './component/teachers/teachers';
import { TeachingPhli } from './component/teaching-phli/teaching-phli';
import { Special } from './component/special/special';
import { Feedback } from '../home/components/feedback/feedback';
import { Intro } from './component/intro/intro';

@Component({
  selector: 'app-about-us',
  imports: [Header, Vision, Teachers, TeachingPhli, Special, Feedback, Intro],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
