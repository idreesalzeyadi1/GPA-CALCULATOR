import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/UafGpa.jsx';
import {Award} from 'lucide-react';

export const meta = {
  slug: 'uaf-gpa-calculator',
  name: "UAF GPA Calculator",
  icon: Award,
  cat: "Education",
  // Brutal H1 / Meta Title targeting UAF students
  title: "UAF GPA Calculator 2026 | University of Agriculture Faisalabad SGPA",
  // High CTR Description tailored for UAF students
  desc: "Free University of Agriculture Faisalabad (UAF) GPA calculator. Accurately calculate your semester SGPA and grade points using the official 4.0 grading scale.",
  // AI-Friendly Intro referencing local academic requirements
  intro: "Designed specifically for students of the University of Agriculture Faisalabad (UAF), this free semester GPA calculator makes academic evaluation quick and precise. Simply input your courses, letter grades, and credit hours to instantly compute your exact SGPA based on the official 4.0 grading scale.",
  // 3 Powerful FAQs to secure Featured Snippets for UAF grading queries
  faq: [
    [
      "How is the UAF GPA calculated?",
      "To calculate your UAF semester GPA, multiply the numerical grade point of each subject by its respective credit hours, sum up all the quality points, and divide the total by the overall credit hours attempted in that semester."
    ],
    [
      "Does this calculator use the official HEC 4.0 grading scale for UAF?",
      "Yes, this tool utilizes the standard 4.0 grading framework followed across teaching departments and faculties at the University of Agriculture Faisalabad. Always confirm minor grading table variations with your official UAF student handbook."
    ],
    [
      "How can I calculate my overall CGPA from UAF semester GPAs?",
      "Once you have calculated your SGPA for each individual semester using this tool, you can easily combine them into our universal GPA to CGPA calculator to find your final degree standing."
    ]
  ]
};

export default function UafGpaPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}