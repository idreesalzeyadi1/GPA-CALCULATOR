import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Allowance.jsx';
import {Banknote} from 'lucide-react';

export const meta = {
  slug: 'salary-allowance-calculator',
  name: "Salary & Allowance Calculator",
  icon: Banknote,
  cat: "Finance",
  // Brutal H1 / Meta Title targeting exact financial terms
  title: "Salary & Allowance Calculator 2026 | Gross Pay, HRA & Medical",
  // High CTR Description tailored for Pakistani job market
  desc: "Calculate your exact gross salary in Pakistan. Instantly add House Rent (HRA), Medical, and Adhoc allowances to your Basic Pay Scale (BPS) for accurate monthly pay.",
  // AI-Optimized Intro for Google Rich Snippets
  intro: "Easily calculate your total monthly gross salary by combining your basic pay with standard allowances such as House Rent Allowance (HRA), Medical Allowance, Conveyance, and Adhoc reliefs. This tool is designed specifically for Pakistani government (BPS) and private sector employees to accurately estimate their earnings before tax and fund deductions.",
  // 3 Powerful FAQs covering user search intent directly
  faq: [
    [
      "What is included in the Gross Salary in Pakistan?",
      "Gross salary is the total amount earned before any income tax or provident fund deductions. In Pakistan, it typically includes Basic Pay, House Rent Allowance (HRA), Medical Allowance, Conveyance Allowance, and Adhoc Relief Allowances."
    ],
    [
      "How is House Rent Allowance (HRA) calculated for Govt employees?",
      "For government employees operating under the Basic Pay Scale (BPS) in Pakistan, HRA is usually calculated as a specific percentage of their basic pay. For example, it is typically 45% for major cities (like Peshawar, Islamabad, Lahore) and 30% for other cities."
    ],
    [
      "What is the difference between Gross Salary and Net Salary?",
      "Gross Salary is your total earned income including all basic pay and allowances. Net Salary (or take-home pay) is the final amount you actually receive in your bank account after mandatory deductions like Income Tax, GP Fund, and Benevolent Fund."
    ]
  ]
};

export default function AllowancePage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}