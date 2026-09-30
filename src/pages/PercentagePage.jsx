import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Percentage.jsx';
import {Divide} from 'lucide-react';

export const meta = {
  slug: 'percentage-calculator',
  name: "Percentage Calculator",
  icon: Divide,
  cat: "Education",
  // Brutal H1 / Meta Title targeting universal percentage and marks queries
  title: "Percentage Calculator 2026 | Marks %, Increase/Decrease & X% of Y",
  // High CTR Description tailored for students and daily math tasks
  desc: "Free online percentage calculator. Instantly find exam marks percentages, calculate X% of any number, or find percentage increases and decreases easily.",
  // AI-Friendly Intro covering student and general calculation use-cases
  intro: "An essential and lightning-fast math tool for students, teachers, and shoppers. Whether you need to calculate your exam marks percentage, find a specific percentage of any given number, or compute increases and decreases, this tool handles all calculations instantly.",
  // 3 Powerful FAQs to secure Featured Snippets for math formulas
  faq: [
    [
      "How do you calculate X% of a number mathematically?",
      "To find X% of a number Y, multiply the number Y by the percentage X, and then divide the final result by 100 (Formula: Y × X / 100)."
    ],
    [
      "How do I calculate my exam marks percentage?",
      "To calculate your exam percentage, divide your obtained marks by the total maximum marks possible, and then multiply the result by 100."
    ],
    [
      "How do you find the percentage increase or decrease between two numbers?",
      "To find the percentage increase, subtract the original number from the new number, divide by the original number, and multiply by 100. For a decrease, subtract the new number from the original, divide by the original, and multiply by 100."
    ]
  ]
};

export default function PercentagePage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}