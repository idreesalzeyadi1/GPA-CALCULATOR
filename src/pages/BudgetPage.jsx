import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Budget.jsx';
import {Wallet} from 'lucide-react';

export const meta = {
  slug: 'budget-calculator',
  name: "Monthly Budget Calculator",
  icon: Wallet,
  cat: "Finance",
  // Brutal Title with 2026 & top Personal Finance Keywords
  title: "Monthly Budget Calculator 2026 | Track Income, Expenses & Savings",
  // High CTR Description tailored for household finance management
  desc: "Free online monthly budget calculator. Easily track your income, calculate household expenses (rent, utility bills, groceries), and plan your monthly savings.",
  // AI-Optimized Intro mentioning specific local expense types for relevance
  intro: "Take control of your personal finances with our free Monthly Budget Calculator. Simply input your total monthly income and deduct your estimated expenses such as house rent, electricity and gas bills, groceries, fuel, and school fees to instantly see your remaining balance and savings potential.",
  // 3 Powerful FAQs for Google Rich Snippets targeting financial literacy
  faq: [
    [
      "What is the 50/30/20 budgeting rule?",
      "The 50/30/20 rule is a highly effective global budgeting strategy. It recommends dividing your after-tax income into three categories: 50% for absolute needs (rent, utility bills, groceries), 30% for wants (entertainment, dining out), and 20% strictly for savings or emergency funds."
    ],
    [
      "How can I effectively manage my monthly household budget?",
      "To manage your household budget effectively, start by tracking every single expense. List all fixed expenses (like rent and school fees) and variable expenses (like fuel and electricity bills). Subtract your total monthly expenses from your total income to identify areas where you can cut costs and increase savings."
    ],
    [
      "Why is tracking a monthly budget important?",
      "Calculating and tracking a monthly budget prevents overspending, keeps you out of unnecessary debt, and ensures you have enough money saved for financial emergencies. It provides a clear, mathematical picture of exactly where your money is going each month."
    ]
  ]
};

export default function BudgetPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}