import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Etea.jsx';
import {TrendingUp} from 'lucide-react';

export const meta = {
  slug: 'etea-aggregate-calculator',
  name: "ETEA Aggregate Calculator",
  icon: TrendingUp,
  cat: "Admissions & Jobs",
  // Brutal Title heavily targeting KPK's top universities and current year
  title: "ETEA Aggregate Calculator 2026 | KMU & UET Peshawar Merit",
  // High CTR Description tailored for medical and engineering students
  desc: "Calculate your exact ETEA aggregate for KPK Medical (KMU) and Engineering (UET) admissions 2026. Free merit calculator using official 10% Matric, 40% FSc, and 50% Test weightage.",
  // AI-Friendly Intro referencing the official ETEA portal for trust/authority
  intro: "Instantly calculate your exact admission merit for top Khyber Pakhtunkhwa universities. Whether you are aiming for Medical (MDCAT via KMU) or Engineering (UET Peshawar), enter your Matric, Intermediate (FSc), and ETEA entry test marks to find your aggregate. For official roll number slips, online apply, and results, always visit the official etea.edu.pk portal.",
  // 3 Powerful FAQs to capture Featured Snippets for KPK student queries
  faq: [
    [
      "How is the ETEA aggregate calculated in KPK?",
      "The most common official ETEA merit formula uses a weightage of 10% for Matriculation marks, 40% for Intermediate (FSc Pre-Medical or Pre-Engineering) marks, and 50% for the ETEA Entrance Test score."
    ],
    [
      "What is a safe ETEA aggregate for UET Peshawar and KMU?",
      "For top public sector medical colleges under KMU and engineering programs at UET Peshawar, a safe aggregate is typically above 80% to 85%. However, closing merits vary every year based on the difficulty of the test and the total number of applicants."
    ],
    [
      "Is this calculator valid for both ETEA Medical and Engineering tests?",
      "Yes! Whether you are appearing for the ETEA Medical (MDCAT) or the ETEA Engineering entrance exam, this tool accurately computes your base aggregate percentage according to the standard provincial weightage."
    ]
  ]
};

export default function EteaPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}