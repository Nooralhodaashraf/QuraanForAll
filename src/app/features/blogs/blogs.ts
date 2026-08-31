import { Component } from '@angular/core';
import { BlogsHero } from './components/blogs-hero/blogs-hero';
import { BlogsList } from './components/blogs-list/blogs-list';

@Component({
  selector: 'app-blogs',
  imports: [BlogsHero, BlogsList],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs {}
