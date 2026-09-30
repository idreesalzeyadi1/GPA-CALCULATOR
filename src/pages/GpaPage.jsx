import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Gpa.jsx';
import {BookOpen} from 'lucide-react';

export const meta = {
  slug: 'gpa-calculator',
  name: "GPA Calculator",
  icon: BookOpen,
  cat: "Education",
  // High-Volume Keyword Title
  title: "GPA Calculator 2026 | UAF, UMT, UOL, UOG & FAST",
  // High CTR Description targeting multiple top universities
  desc: "Free universal GPA calculator on the 4.0 scale. Learn how to calculate GPA for top universities including UAF, UMT, UOL, UOG, and FAST instantly.",
  // Natural Intro heavily loaded with exact match keywords
  intro: "Wondering how to calculate GPA? Whether you are searching for a UAF GPA calculator, UMT GPA calculator, UOL GPA calculator, or FAST GPA calculator, this universal tool computes your semester grades on the standard 4.0 scale accurately. Just add your subjects, select grades, and enter credit hours to get your exact GPA.",
  // 3 Powerful FAQs to secure Featured Snippets
  faq: [
    [
      "How to calculate GPA?",
      "To calculate your GPA, multiply the grade point of each subject by its credit hours. Add all these quality points together, and then divide the sum by the total number of credit hours you attempted in the semester."
    ],
    [
      "Can I use this as a UAF, UMT, UOG, or UOL GPA calculator?",
      "Yes! This universal tool follows the standard 4.0 grading scale used by major Pakistani institutions, making it a perfect match if you need a UAF GPA calculator, UMT GPA calculator, UOL GPA calculator, or UOG GPA calculator."
    ],
    [
      "What is considered a good GPA in Pakistani universities?",
      "Generally, a GPA of 3.0 or above is considered good and keeps you safe from academic probation. A GPA of 3.5 or higher is considered excellent and is often required to secure merit-based scholarships and fee waivers."
    ]
  ]
};

export default function GpaPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}