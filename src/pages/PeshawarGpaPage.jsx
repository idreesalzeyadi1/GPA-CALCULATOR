import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/PeshawarGpa.jsx';
import {School} from 'lucide-react';

export const meta = {
  slug: 'peshawar-university-gpa-calculator',
  name: "University of Peshawar GPA Calculator",
  icon: School,
  cat: "Education",
  // Brutal H1 / Meta Title targeting the local university and exact SGPA intent
  title: "University of Peshawar GPA Calculator 2026 | UoP SGPA & 4.0 Scale",
  // High CTR Description tailored for UoP students
  desc: "Free University of Peshawar (UoP) GPA calculator. Accurately calculate your semester SGPA and grade points using the official 4.0 grading system.",
  // AI-Friendly Intro referencing local academic relevance
  intro: "Designed specifically for students of the University of Peshawar (UoP), this free semester GPA calculator makes academic tracking effortless. Simply add your department courses, select your letter grades, and input credit hours to instantly compute your exact SGPA based on the official 4.0 grading scale.",
  // 3 Powerful FAQs to secure Featured Snippets for UoP grading queries
  faq: [
    [
      "How is the University of Peshawar GPA calculated?",
      "To calculate your UoP semester GPA, multiply the numerical grade point of each subject by its respective credit hours, sum up all the quality points, and divide the total by the overall credit hours attempted in that semester."
    ],
    [
      "Does this calculator use the standard HEC 4.0 scale for UoP?",
      "Yes, this tool utilizes the standard 4.0 grading framework followed across departments at the University of Peshawar. However, always double-check your specific department's notification for any minor grading table variations."
    ],
    [
      "How can I convert my UoP semester GPA into a cumulative CGPA?",
      "Once you have calculated your SGPA for each individual semester using this tool, you can combine them along with their total credit hours into our dedicated GPA to CGPA calculator to find your final degree standing."
    ]
  ]
};

export default function PeshawarGpaPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}