import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Age.jsx';
import {CalendarDays} from 'lucide-react';

export const meta = {
  slug: 'age-calculator',
  name: "Age & Birth Date Calculator",
  icon: CalendarDays,
  cat: "Utility",
  // High-Volume Keyword Title
  title: "Age Calculator 2026 | Exact Age in Years, Months & Days",
  // High CTR Description targeting Job/Admission intent
  desc: "Calculate your exact age from your date of birth in years, months, and days. Perfect for checking FPSC, KPPSC, CSS, and university admission age limits.",
  // Natural Language Intro for AI Overviews
  intro: "Instantly calculate your exact chronological age from your date of birth. This tool is highly useful for checking your age eligibility for government jobs, armed forces, university admissions, or simply finding out the exact countdown to your next birthday.",
  // 3 Powerful FAQs for Google Rich Snippets
  faq: [
    [
      "How is exact age calculated from date of birth?",
      "Age is calculated by subtracting your birth date from the current date (or any specific target date), providing a precise breakdown in years, months, and days."
    ],
    [
      "Why is exact age calculation important for jobs in Pakistan?",
      "Government exams like FPSC, KPPSC, and CSS, as well as armed forces and university admissions, have strict upper and lower age limit criteria (e.g., maximum 28 years on the closing date). This tool helps ensure you meet those exact eligibility requirements."
    ],
    [
      "Does this tool show the countdown to my next birthday?",
      "Yes, besides calculating your current age, this calculator also provides the exact number of months and days remaining until your upcoming birthday."
    ]
  ]
};

export default function AgePage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}