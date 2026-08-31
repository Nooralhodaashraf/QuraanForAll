import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-teaching-phli',
  imports: [],
  templateUrl: './teaching-phli.html',
  styleUrl: './teaching-phli.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TeachingPhli {
  philosophyCards = [
    {
      title: 'Understanding Before Memorizing',
      description: 'We ensure students understand meanings and Tajweed rules before memorizing.',
    },
    {
      title: 'Personalized Learning',
      description:
        'Each student receives individualized lessons designed for their exact pace and level.',
    },
    {
      title: 'Gentle & Supportive Teaching',
      description:
        'We teach with patience, kindness, and encouragement to help students grow confidently.',
    },
    {
      title: 'Building a Love for the Quran',
      description:
        'Our goal is to nurture a meaningful emotional connection with the Book of Allah.',
    },
    {
      title: 'Interactive & Engaging Sessions',
      description:
        'We use effective techniques that keep students focused and excited during every class.',
    },
    {
      title: 'Clear Step-by-Step Guidance',
      description:
        'Students follow a structured, simple path that makes learning smooth and stress-free.',
    },
  ];
}
