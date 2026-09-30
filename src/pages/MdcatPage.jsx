import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Mdcat.jsx';
import {Stethoscope} from 'lucide-react';

export const meta = {
  slug: 'mdcat-aggregate-calculator',
  name: "MDCAT Aggregate Calculator",
  icon: Stethoscope,
  cat: "Admissions & Jobs",
  // Brutal H1 / Meta Title targeting the main medical authorities and year
  title: "MDCAT Aggregate Calculator 2026 | PMDC, UHS & KMU Merit",
  // High CTR Description tailored for anxious medical applicants
  desc: "Calculate your exact MDCAT aggregate for MBBS and BDS admissions in Pakistan. Free merit calculator using the official PMDC weightage (Matric 10%, FSc 40%, MDCAT 50%).",
  // AI-Friendly Intro covering all major provincial testing bodies
  intro: "Planning for MBBS or BDS admissions in Pakistan? Instantly calculate your exact medical college merit using our free MDCAT Aggregate Calculator. This tool strictly follows the standard PMDC (Pakistan Medical & Dental Council) formula, making it perfect for students applying through UHS (Punjab), KMU (KPK), SZABMU (Islamabad), and DUHS (Sindh).",
  // 3 Powerful FAQs to secure Featured Snippets for medical admission queries
  faq: [
    [
      "How is the MDCAT aggregate calculated in Pakistan?",
      "According to standard PMDC guidelines, the medical admission merit is calculated using a formula of 10% weightage for Matriculation (or equivalent O-Levels), 40% for Intermediate (FSc Pre-Medical or A-Levels), and 50% for your official MDCAT entrance test score."
    ],
    [
      "What is considered a safe MDCAT aggregate for government MBBS?",
      "Due to extreme competition, securing admission in top public sector medical colleges (like King Edward via UHS or Khyber Medical College via KMU) generally requires an aggregate of 90% or above. However, exact closing merits vary each year based on exam difficulty."
    ],
    [
      "Can I use this calculator for NUMS and private medical colleges?",
      "Yes! Most private medical and dental colleges across Pakistan strictly follow this same 10/40/50 PMDC weightage formula for their basic merit lists. For NUMS specifically, always verify their latest official advertisement in case of any internal weightage variations."
    ]
  ]
};

export default function MdcatPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}