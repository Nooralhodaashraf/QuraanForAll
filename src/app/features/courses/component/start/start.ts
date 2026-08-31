import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.html',
  styleUrl: './start.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Start {
  courseCategories = [
    {
      title: 'New to Quran?',
      description: 'Start with the basics and learn correct recitation.',
      logo: '/imgs/item.png',
      target: 'studies',
    },
    {
      title: 'For Your Child',
      description: 'Interactive Quran classes designed especially for kids.',
      logo: '/imgs/user.png',
      target: 'kids-course',
    },
    {
      title: 'Islamic Knowledge',
      description: 'Understanding the Quran and Islam.',
      logo: '/imgs/books.png',
      target: 'knowledge',
    },
    {
      title: 'Want to Learn Arabic?',
      description: 'Build strong Arabic reading and language skills.',
      logo: '/imgs/ض.png',
      target: 'arabic',
    },
  ];

  scrollTo(targetId: string): void {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

