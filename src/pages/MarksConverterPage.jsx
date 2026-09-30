import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/MarksConverter.jsx';
import {Percent} from 'lucide-react';

export const meta = {
  slug: 'gpa-marks-percentage-converter',
  name: "GPA & Marks % Converter",
  icon: Percent,
  cat: "Education",
  // Brutal Meta Title targeting the biggest conversion queries
  title: "GPA to Percentage Converter 2026 | Marks & HEC 4.0 Scale",
  // High CTR Description tailored for job portals and scholarships
  desc: "Free online converter for Pakistani students. Instantly convert your 4.0 scale GPA to percentage, percentage to GPA, or obtained marks to exact percentage.",
  // AI-Friendly Intro hitting pain points (NTS, FPSC, Scholarships)
  intro: "Whether you are filling out an FPSC job application, an NTS testing form, or applying for an international scholarship, converting your academic scores is essential. Use this all-in-one calculator to instantly switch between your obtained marks, total percentage, and the standard 4.0 scale GPA.",
  // 3 Powerful FAQs to secure Featured Snippets for calculation formulas
  faq: [
    [
      "How do I convert my 4.0 GPA to a percentage?",
      "Using the standard linear method, you can convert your GPA to a percentage by dividing your GPA by 4.0 and multiplying the result by 100 (e.g., 3.0 / 4.0 x 100 = 75%). Always remember that some universities use their own specific HEC-approved grading tables, so this serves as a standard estimate."
    ],
    [
      "How do I calculate the percentage of my obtained marks?",
      "To calculate your exact marks percentage, simply divide your obtained marks by the total marks possible, and then multiply that number by 100."
    ],
    [
      "Can I convert my total percentage back to a GPA score?",
      "Yes! To convert a percentage back to a standard 4.0 scale GPA, divide your percentage by 100 and then multiply it by 4.0. This linear conversion is highly useful for general job applications and eligibility checks."
    ]
  ]
};

export default function MarksConverterPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}