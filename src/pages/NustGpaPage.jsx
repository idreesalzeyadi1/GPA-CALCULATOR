import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/NustGpa.jsx';
import {Atom} from 'lucide-react';

export const meta = {
  slug: 'nust-gpa-calculator',
  name: "NUST GPA Calculator",
  icon: Atom,
  cat: "Education",
  // Brutal Meta Title targeting full university name and precise intent
  title: "NUST GPA Calculator 2026 | Calculate SGPA on Official 4.0 Scale",
  // High CTR Description tailored for NUST engineering and CS students
  desc: "Accurately calculate your NUST semester GPA (SGPA). Free online calculator using the official National University of Sciences and Technology 4.0 grading scale.",
  // AI-Friendly Intro covering the specific NUST grading environment
  intro: "Calculate your exact NUST semester GPA (SGPA) instantly. Designed specifically for students across all campuses of the National University of Sciences and Technology (NUST), this tool strictly follows the official NUST 4.0 grading policy to accurately compute your quality points and semester results.",
  // 3 Powerful FAQs to secure Featured Snippets for NUST grading rules
  faq: [
    [
      "What is the official NUST 4.0 grading scale?",
      "NUST follows a strict 4.0 grading system where an 'A' grade equals 4.00, 'B+' is 3.50, 'B' is 3.00, 'C+' is 2.50, 'C' is 2.00, 'D+' is 1.50, and 'D' is 1.00. Any grade below 1.00 is considered an 'F' (0.00)."
    ],
    [
      "How is SGPA calculated at NUST?",
      "To calculate your Semester GPA (SGPA) at NUST, multiply the grade point of each awarded letter grade by its respective credit hours. Sum all these quality points together, and then divide the total by the number of credit hours attempted in that semester."
    ],
    [
      "Does this calculator work for both absolute and relative grading?",
      "Yes! Whether your specific course instructor used absolute grading or a relative grading curve to assign your final letter grade, once you know your letters (A, B+, C, etc.), this calculator applies the standard NUST formula to compute your exact GPA."
    ]
  ]
};

export default function NustGpaPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}