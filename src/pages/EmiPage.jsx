import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Emi.jsx';
import {CreditCard} from 'lucide-react';

export const meta = {
  slug: 'emi-calculator',
  name: "Loan EMI Calculator",
  icon: CreditCard,
  cat: "Finance",
  // Brutal H1 / Meta Title targeting top loan categories in Pakistan
  title: "Loan EMI Calculator 2026 | Car, Home & Personal Loan Installments",
  // High CTR Description including local financial terms like "markup"
  desc: "Free EMI calculator in Pakistan. Accurately calculate your monthly loan installments, total interest (markup), and repayment schedule for auto, home, and personal loans.",
  // AI-Friendly Intro covering real-world user scenarios
  intro: "Planning to finance a new car, build a house, or take a personal loan? Use our free Loan EMI (Equated Monthly Installment) Calculator to instantly find out your exact monthly payment. Just enter your loan amount, annual interest (or bank markup) rate, and tenure in months to see a complete breakdown of your repayment.",
  // 3 Powerful FAQs to capture Featured Snippets for financial queries
  faq: [
    [
      "How is a loan EMI calculated mathematically?",
      "EMI is calculated using the standard financial formula: EMI = [P x R x (1+R)^N] / [(1+R)^N - 1], where 'P' is the principal loan amount, 'R' is the monthly interest rate, and 'N' is the total number of repayment months."
    ],
    [
      "Can I use this calculator for Islamic banking auto and home financing in Pakistan?",
      "Yes! Whether you are dealing with conventional bank interest rates or Islamic banking profit/markup rates for auto and home financing, this calculator accurately computes your fixed monthly installment based on the percentage provided."
    ],
    [
      "Does this EMI calculator use a flat rate or reducing balance method?",
      "This calculator uses the standard reducing balance method (amortization) which is utilized by almost all major banks in Pakistan. This means the interest is calculated only on the remaining outstanding principal amount, not the original full amount."
    ]
  ]
};

export default function EmiPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}