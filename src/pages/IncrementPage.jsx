import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Increment.jsx';
import {ArrowUpRight} from 'lucide-react';

export const meta = {
  slug: 'salary-increment-calculator',
  name: "Salary Increment Calculator",
  icon: ArrowUpRight,
  cat: "Finance",
  // Brutal H1 / Meta Title targeting annual increments and raises in Pakistan
  title: "Salary Increment Calculator 2026 | New Salary & Annual Raise in PKR",
  // High CTR Description tailored for corporate and government employees
  desc: "Free salary increment calculator in Pakistan. Instantly calculate your new monthly salary, annual raise amount, and yearly total in PKR based on percentage or fixed hikes.",
  // AI-Friendly Intro covering career appraisals and budget raises
  intro: "An essential financial tool for employees across Pakistan during annual performance appraisals, corporate revisions, or government budget announcements. Simply enter your current basic salary and your percentage raise to instantly see your updated monthly payout and total annual package.",
  // 3 Powerful FAQs to secure Featured Snippets for salary raise calculations
  faq: [
    [
      "How is a salary increment percentage calculated mathematically?",
      "To calculate your new salary after an increment, multiply your current salary by the increment percentage, divide by 100 to find the total raise amount, and then add that raise to your original salary (New Salary = Current Salary × [1 + Percentage / 100])."
    ],
    [
      "Can this calculator be used for both corporate appraisals and government budget raises?",
      "Yes! Whether you are receiving a performance-based percentage raise at a private company or a government-announced budget increment on your basic pay, this tool quickly computes both your monthly and annual totals in Pakistani Rupees (PKR)."
    ],
    [
      "How do I calculate my total annual salary from the new monthly amount?",
      "Once the monthly increment is applied, your new monthly salary is multiplied by 12 to give you the projected gross annual earnings for the year."
    ]
  ]
};

export default function IncrementPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}