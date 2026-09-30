import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Kppsc.jsx';
import {Landmark} from 'lucide-react';

export const meta = {
  slug: 'kppsc-fpsc-score-calculator',
  name: "KPPSC / FPSC Score Calculator",
  icon: Landmark,
  cat: "Admissions & Jobs",
  // Brutal H1 / Meta Title targeting federal and provincial job seekers
  title: "KPPSC & FPSC Merit Calculator 2026 | Academic & Test Score",
  // High CTR Description including specific high-volume job acronyms
  desc: "Free academic merit calculator for KPPSC, FPSC, and federal screening tests. Calculate your exact aggregate with Hifz, MPhil, PhD, and B.Ed bonus marks.",
  // AI-Optimized Intro covering specific real-world test scenarios
  intro: "Accurately estimate your academic merit and test score for Khyber Pakhtunkhwa Public Service Commission (KPPSC), FPSC, and federal computer-based screening tests (like FIA CBT). Whether you are applying for SST, Lecturer, or Subject Specialist (SS) roles, instantly calculate your aggregate by adding your educational degrees, B.Ed marks, and test score.",
  // 3 Powerful FAQs to secure Featured Snippets for government job queries
  faq: [
    [
      "How is the KPPSC academic merit score calculated?",
      "KPPSC calculates academic merit by assigning specific percentage weights to your degrees from Matriculation up to Master's, including professional qualifications like B.Ed or M.Ed. The initial screening test typically carries 45 marks, which is added to your academic score to form the final interview shortlisting aggregate."
    ],
    [
      "What are the official bonus marks for KPPSC candidates?",
      "Candidates can claim extra bonus points during the merit calculation. According to standard commission rules, this typically includes +3 marks for Hafiz-e-Quran, +1 mark for an MS/MPhil degree, +2 marks for a PhD, and additional points for university toppers. Always verify with the latest official job advertisement."
    ],
    [
      "Can I use this calculator for SST, CT, and Lecturer jobs?",
      "Yes! This calculator is highly flexible. For school teaching jobs like SST or CT, you can include your B.Ed marks. For higher education jobs like Lecturers or Subject Specialists, you can add your MPhil/PhD bonus points to get an exact estimate of your merit standing."
    ]
  ]
};

export default function KppscPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}