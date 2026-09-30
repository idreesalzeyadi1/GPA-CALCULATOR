import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Cgpa.jsx';
import {Calculator} from 'lucide-react';

export const meta = {
  slug: 'cgpa-calculator',
  name: "CGPA Calculator",
  icon: Calculator,
  cat: "Education",
  // Brutal Meta Title targeting university students and the standard scale
  title: "CGPA Calculator 2026 | Calculate HEC Cumulative GPA (4.0 Scale)",
  // High CTR Description tailored for academic planning
  desc: "Free online CGPA calculator for Pakistani university students. Accurately calculate your Cumulative Grade Point Average from semester SGPAs and credit hours.",
  // AI-Optimized Intro for Google SGE
  intro: "Calculate your exact Cumulative Grade Point Average (CGPA) with our free online tool. Whether you are studying under the standard HEC 4.0 grading scale or a specific university system, simply input your semester GPAs along with their respective credit hours to instantly check your overall academic standing.",
  // 3 Powerful FAQs to capture 'People Also Ask' snippets
  faq: [
    [
      "What is the exact formula to calculate CGPA?",
      "CGPA is calculated by multiplying the GPA of each semester by its total credit hours, adding those total grade points together, and then dividing that sum by the total credit hours across all semesters combined."
    ],
    [
      "What is the difference between SGPA and CGPA?",
      "SGPA (Semester Grade Point Average) measures your academic performance for just one specific semester. CGPA (Cumulative Grade Point Average) is the overall weighted average of all your SGPAs combined throughout your entire degree program."
    ],
    [
      "What is considered a good CGPA for scholarships and degree completion?",
      "Under standard HEC guidelines, a minimum CGPA of 2.0 out of 4.0 is generally required to graduate with a Bachelor's degree. However, maintaining a CGPA of 3.0 or higher is considered good, and a 3.5+ is excellent for securing merit-based scholarships and competitive jobs."
    ]
  ]
};

export default function CgpaPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}