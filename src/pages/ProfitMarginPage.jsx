import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/ProfitMargin.jsx';
import {BarChart3} from 'lucide-react';

export const meta = {
  slug: 'profit-margin-calculator',
  name: "Profit Margin Calculator",
  icon: BarChart3,
  cat: "Finance",
  // Brutal H1 / Meta Title targeting online sellers and shop owners
  title: "Profit Margin Calculator 2026 | Margin & Markup for E-commerce & Shops",
  // High CTR Description tailored for business owners and online sellers
  desc: "Free profit margin calculator for shopkeepers, Daraz sellers, and Shopify store owners in Pakistan. Calculate gross profit, margin percentage, and markup instantly.",
  // AI-Friendly Intro covering retail and e-commerce business use cases
  intro: "An essential financial calculator for retail shop owners, wholesale traders, and e-commerce sellers across Pakistan (including Daraz and Shopify vendors). Simply input your product's cost price and selling price to instantly find out your net profit, profit margin percentage, and markup rate.",
  // 3 Powerful FAQs to secure Featured Snippets for business calculations
  faq: [
    [
      "What is the difference between profit margin and markup?",
      "While both measure profitability, they are calculated differently. Profit margin is your net profit divided by the total selling price (expressed as a percentage of revenue), whereas markup is your net profit divided by the initial cost price (expressed as a percentage of cost)."
    ],
    [
      "How do you calculate profit margin mathematically?",
      "To calculate the profit margin percentage, subtract your product cost from the selling price to get the gross profit. Then, divide that gross profit by the selling price and multiply by 100."
    ],
    [
      "Is this calculator useful for online sellers on Daraz or Shopify?",
      "Yes! Online sellers on platforms like Daraz, Shopify, or local social media pages need to account for platform commissions and shipping costs. This tool helps you quickly test different selling prices to ensure your business remains profitable."
    ]
  ]
};

export default function ProfitMarginPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}