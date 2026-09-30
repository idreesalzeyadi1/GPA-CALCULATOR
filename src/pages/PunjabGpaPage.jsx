import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/PunjabGpa.jsx';
import {Building2} from 'lucide-react';

export const meta = {
  slug: 'punjab-university-gpa-calculator',
  name: "Punjab University (Lahore) GPA Calculator",
  icon: Building2,
  cat: "Education",
  // Brutal H1 / Meta Title targeting the largest university in Punjab
  title: "Punjab University GPA Calculator 2026 | PU Lahore SGPA & 4.0 Scale",
  // High CTR Description tailored for PU Lahore students
  desc: "Free University of the Punjab (PU Lahore) GPA calculator. Accurately calculate your semester SGPA and quality points using the official 4.0 grading system.",
  // AI-Friendly Intro referencing academic requirements
  intro: "Designed specifically for students of the University of the Punjab (PU Lahore), this free semester GPA calculator makes academic evaluation quick and precise. Simply input your courses, letter grades, and credit hours to instantly compute your exact SGPA based on the official 4.0 grading scale.",
  // 3 Powerful FAQs to secure Featured Snippets for PU grading queries
  faq: [
    [
      "How is the Punjab University (PU Lahore) GPA calculated?",
      "To calculate your PU semester GPA, multiply the numerical grade point of each subject by its respective credit hours, sum up all the quality points, and divide the total by the overall credit hours attempted in that semester."
    ],
    [
      "Does this calculator use the official HEC 4.0 grading scale for PU?",
      "Yes, this tool utilizes the standard 4.0 grading framework followed across teaching departments and affiliated colleges of Punjab University. Always confirm minor grading table variations with your specific department's notification."
    ],
    [
      "How can I calculate my overall CGPA from PU semester GPAs?",
      "Once you have calculated your SGPA for each individual semester using this tool, you can easily combine them into our universal GPA to CGPA calculator to find your final degree standing."
    ]
  ]
};

export default function PunjabGpaPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}