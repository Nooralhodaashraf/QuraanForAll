import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PricingPlan {
  days: number;
  daysLabel: string;
  price: number;
  oldPrice: number;
  descriptionLine1: string;
  descriptionLine2: string;
  badgeBg: string;
  popular?: boolean;
}

@Component({
  selector: 'app-pricing-plans',
  imports: [CommonModule],
  templateUrl: './pricing-plans.html',
  styleUrl: './pricing-plans.css',
})
export class PricingPlans {
  durations = ['60 Mins', '45 Mins', '30 Mins'];
  selectedDuration = '30 Mins';

  // Base plan definitions and colors matching the design photo
  private planTemplates = [
    {
      days: 1,
      daysLabel: '1 Days / Week',
      descriptionLine1: 'Perfect for',
      descriptionLine2: 'beginners',
      badgeBg: '#FFD8DC', // Soft pastel pink
      popular: false,
      rates: {
        '30 Mins': { price: 30, oldPrice: 35 },
        '45 Mins': { price: 45, oldPrice: 50 },
        '60 Mins': { price: 60, oldPrice: 70 },
      },
    },
    {
      days: 2,
      daysLabel: '2 Days / Week',
      descriptionLine1: 'Balanced',
      descriptionLine2: 'learning pace',
      badgeBg: '#FFE4CD', // Soft pastel peach
      popular: false,
      rates: {
        '30 Mins': { price: 55, oldPrice: 60 },
        '45 Mins': { price: 80, oldPrice: 90 },
        '60 Mins': { price: 110, oldPrice: 120 },
      },
    },
    {
      days: 3,
      daysLabel: '3 Days / Week',
      descriptionLine1: 'Steady',
      descriptionLine2: 'improvement',
      badgeBg: '#D7F7DF', // Soft pastel green
      popular: true,
      rates: {
        '30 Mins': { price: 75, oldPrice: 85 },
        '45 Mins': { price: 110, oldPrice: 125 },
        '60 Mins': { price: 150, oldPrice: 170 },
      },
    },
    {
      days: 4,
      daysLabel: '4 Days / Week',
      descriptionLine1: 'Advanced',
      descriptionLine2: 'practice',
      badgeBg: '#D8EDFA', // Soft pastel blue
      popular: false,
      rates: {
        '30 Mins': { price: 95, oldPrice: 105 },
        '45 Mins': { price: 140, oldPrice: 155 },
        '60 Mins': { price: 190, oldPrice: 210 },
      },
    },
    {
      days: 5,
      daysLabel: '5 Days / Week',
      descriptionLine1: 'Intensive',
      descriptionLine2: 'learning',
      badgeBg: '#FADDF4', // Soft pastel lavender
      popular: false,
      rates: {
        '30 Mins': { price: 110, oldPrice: 125 },
        '45 Mins': { price: 165, oldPrice: 185 },
        '60 Mins': { price: 220, oldPrice: 250 },
      },
    },
  ];

  get plans(): PricingPlan[] {
    const durKey = this.selectedDuration as '30 Mins' | '45 Mins' | '60 Mins';
    return this.planTemplates.map((template) => {
      const rate = template.rates[durKey] || template.rates['30 Mins'];
      return {
        days: template.days,
        daysLabel: template.daysLabel,
        price: rate.price,
        oldPrice: rate.oldPrice,
        descriptionLine1: template.descriptionLine1,
        descriptionLine2: template.descriptionLine2,
        badgeBg: template.badgeBg,
        popular: template.popular,
      };
    });
  }

  selectDuration(duration: string): void {
    this.selectedDuration = duration;
  }
  patternItems = Array.from({ length: 100 });
}
