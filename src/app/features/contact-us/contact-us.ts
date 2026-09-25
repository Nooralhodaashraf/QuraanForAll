import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactHeader } from './contact-header/contact-header';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, ContactHeader],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  activeFaqIndex: number | null = 0;

  faqs = [
    {
      question: 'How do I start the free trial class?',
      answer:
        'Simply fill out the form above with your preferred contact information and course interest. Our academic coordinator will contact you via WhatsApp or Email within 30 minutes to arrange a convenient time for your 1-on-1 free trial session.',
    },
    {
      question: 'Can I choose between male and female teachers?',
      answer:
        'Yes, absolutely! We have highly qualified, certified male and female Al-Azhar graduate tutors available for both adults and children according to your family’s preference.',
    },
    {
      question: 'What platform do you use for online Quran classes?',
      answer:
        'Classes are conducted one-on-one via Zoom or Google Meet with interactive digital whiteboards, Quran screen sharing, and audio recordings for revision.',
    },
    {
      question: 'What are the class timings and timezone availability?',
      answer:
        'We offer 24/7 flexible scheduling. You can select class times that fit your family’s schedule across UK, USA, Canada, Australia, and European timezones.',
    },
    {
      question: 'Can I reschedule or cancel a class if something comes up?',
      answer:
        'Yes, you can easily reschedule any lesson with at least 4 hours advance notice through our dedicated WhatsApp support or student portal.',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s\-()]{7,20}$/)]],
      course: ['Quran Tajweed & Recitation', Validators.required],
      studentType: ['Kids (4-12 yrs)', Validators.required],
      preferredTime: ['Evening', Validators.required],
      message: [''],
    });
  }

  toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      this.contactForm.reset({
        course: 'Quran Tajweed & Recitation',
        studentType: 'Kids (4-12 yrs)',
        preferredTime: 'Evening',
      });
    }, 1200);
  }

  resetStatus(): void {
    this.isSubmitted = false;
  }
}
