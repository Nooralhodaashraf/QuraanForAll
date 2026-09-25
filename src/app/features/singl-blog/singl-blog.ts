import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogContant } from './component/blog-contant/blog-contant';
import { ContactHeader } from '../contact-us/contact-header/contact-header';
import { BlogsHero } from '../blogs/components/blogs-hero/blogs-hero';
import { SingleBlogHeader } from './component/single-blog-header/single-blog-header';

interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
}

@Component({
  selector: 'app-singl-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, BlogContant, ContactHeader, BlogsHero, SingleBlogHeader],
  templateUrl: './singl-blog.html',
  styleUrl: './singl-blog.css',
})
export class SinglBlog {
  copied = false;

  relatedPosts: BlogPost[] = [
    {
      title: 'The Essential Rules of Tajweed for Beginners',
      category: 'Tajweed Rules',
      date: 'Aug 18, 2026',
      readTime: '5 min read',
      slug: 'essential-rules-of-tajweed',
      image: '/imgs/books.png',
    },
    {
      title: 'Why Female Quran Tutors Are Ideal for Young Children',
      category: 'Teaching Insights',
      date: 'Aug 12, 2026',
      readTime: '4 min read',
      slug: 'female-quran-tutors-kids',
      image: '/imgs/studies-bg.png',
    },
    {
      title: '5 Daily Habits to Strengthen Quran Memorization (Hifz)',
      category: 'Memorization',
      date: 'Jul 29, 2026',
      readTime: '7 min read',
      slug: '5-daily-habits-quran-hifz',
      image: '/imgs/aboutUs.png',
    },
  ];

  categories = [
    { name: 'Quran Recitation', count: 12 },
    { name: 'Tajweed Rules', count: 8 },
    { name: 'Quran Memorization (Hifz)', count: 15 },
    { name: 'Arabic Language Basics', count: 6 },
    { name: 'Islamic Studies for Kids', count: 10 },
    { name: 'Parenting & Education', count: 5 },
  ];

  tags = [
    'Hifz',
    'Tajweed',
    'QuranForKids',
    'AlAzhar',
    'OnlineClasses',
    'Arabic',
    'IslamicStudies',
  ];

  copyLink(): void {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2500);
    }
  }
}
