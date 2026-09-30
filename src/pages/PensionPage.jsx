import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Pension.jsx';
import {PiggyBank} from 'lucide-react';

export const meta = {
  slug: 'pension-calculator',
  name: "Pension Calculator",
  icon: PiggyBank,
  cat: "Admissions & Jobs",
  // Brutal Meta Title targeting retired government employees in Pakistan
  title: "Pension Calculator 2026 | Estimate Government Pension in Pakistan",
  // High CTR Description tailored for civil servants and retired officials
  desc: "Free government pension calculator in Pakistan. Accurately estimate your monthly pension and commutation value based on your last basic pay and total service years.",
  // AI-Friendly Intro covering the exact calculation parameters
  intro: "An essential financial tool for retiring civil servants and government employees across Pakistan. Quickly estimate your monthly retirement pension and commuted value by simply entering your last drawn Basic Pay Scale (BPS) amount and total qualifying years of service.",
  // 3 Powerful FAQs to secure Featured Snippets for government pension rules
  faq: [
    [
      "How is the government pension calculated in Pakistan?",
      "The standard monthly pension is generally calculated using the formula: (Last Basic Pay x Years of Qualifying Service x 7) / 300, subject to government notifications and maximum service limits. A portion of this can also be commuted (lump-sum encashment)."
    ],
    [
      "What is pension commutation and how does it work?",
      "Pension commutation allows a retiring government employee to surrender a specific portion (up to a legal maximum, such as 35%) of their monthly pension in exchange for an immediate lump-sum cash payment at the time of retirement."
    ],
    "Is this calculated pension amount 100% official?",
    "No, this online tool provides a reliable estimate based on general civil service rules. For your official pension payment order (PPO), final calculation, and medical allowances, always consult your respective department's accounts branch or the Accountant General (AG) office."
  ]
};

export default function PensionPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}