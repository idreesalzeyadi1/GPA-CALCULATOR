import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/ComsatsGpa.jsx';
import {GraduationCap} from 'lucide-react';

export const meta = {
  slug: 'comsats-gpa-calculator',
  name: "COMSATS GPA Calculator",
  icon: GraduationCap,
  cat: "Education",
  // Brutal H1 / Meta Title - Target exact user intent with year and scale
  title: "COMSATS GPA Calculator 2026 | Accurate CUI 4.0 Scale SGPA",
  // High CTR Meta Description with strong keywords
  desc: "Calculate your exact COMSATS semester GPA (SGPA). This standard 4.0 scale tool is also compatible with FAST, IMSciences, CECOS, and 40+ top Pakistani universities.",
  // Keyword-rich Intro that AI Overviews love to read
  intro: "Easily calculate your COMSATS University semester GPA by entering your course grades and credit hours. While strictly following the official CUI 4.0 grade-point scale, this calculator's standard algorithm is also fully compatible with over 40 top universities in Pakistan, including the University of Peshawar, FAST NUCES, CECOS, and IMSciences.",
  // FAQ Schema Data - Now covering COMSATS + other top universities
  faq: [
    [
      "How is COMSATS GPA calculated?", 
      "Your semester GPA is calculated by dividing the total Quality Points (which is Grade Points multiplied by Credit Hours) by the total Credit Hours attempted in that specific semester."
    ],
    [
      "Can I use this calculator for University of Peshawar, FAST, or IMSciences?", 
      "Yes! Because COMSATS uses the standard HEC-approved 4.0 grading scale, students from over 40 top Pakistani institutions—such as University of Peshawar (UoP), FAST, CECOS, and IMSciences—can accurately use this tool to calculate their SGPA."
    ],
    [
      "What is the official COMSATS 4.0 grading scale?", 
      "COMSATS University (CUI) uses a standard grading scale where A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, C+ = 2.7, C = 2.3, C- = 2.0, D = 1.3, and F = 0.0."
    ]
  ]
};

export default function ComsatsGpaPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}