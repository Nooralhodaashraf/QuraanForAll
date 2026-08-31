import { SinglCourse } from './features/singl-course/singl-course';
import { SinglBlog } from './features/singl-blog/singl-blog';
import { AboutUs } from './features/about-us/about-us';
import { Courses } from './features/courses/courses';
import { ContactUs } from './features/contact-us/contact-us';
import { Blogs } from './features/blogs/blogs';
import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home, title: 'Home' },
  { path: 'Blogs', component: Blogs, title: 'Blogs' },
  { path: 'ContactUs', component: ContactUs, title: 'ContactUs' },
  { path: 'Courses', component: Courses, title: 'Courses' },
  { path: 'AboutUs', component: AboutUs, title: 'AboutUs' },
  { path: 'SinglBlog', component: SinglBlog, title: 'SinglBlog' },
  { path: 'SinglCourse', component: SinglCourse, title: 'SinglCourse' },
];
