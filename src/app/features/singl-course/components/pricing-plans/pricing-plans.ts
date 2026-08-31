import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-plans',
  imports: [],
  templateUrl: './pricing-plans.html',
  styleUrl: './pricing-plans.css',
})
export class PricingPlans {
  durations = ['60 Mins', '45 Mins', '30 Mins'];

  selectedDuration = '30 Mins';

  plans = [
    {
      price: 30,
      oldPrice: 35,
      days: 1,
      description: 'Perfect for beginners',
      popular: false,
    },
    {
      price: 55,
      oldPrice: 60,
      days: 2,
      description: 'Balanced learning pace',
      popular: false,
    },
    {
      price: 75,
      oldPrice: 85,
      days: 3,
      description: 'Steady skill improvement',
      popular: true,
    },
    {
      price: 95,
      oldPrice: 105,
      days: 4,
      description: 'Advanced practice',
      popular: false,
    },
    {
      price: 110,
      oldPrice: 125,
      days: 5,
      description: 'Intensive learning',
      popular: false,
    },
  ];
}
