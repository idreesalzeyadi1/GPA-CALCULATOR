import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Discount.jsx';
import {Tag} from 'lucide-react';

export const meta = {
  slug: 'discount-calculator',
  name: "Discount / Sale Calculator",
  icon: Tag,
  cat: "Finance",
  // Brutal Meta Title targeting shopping and savings intent
  title: "Discount & Sale Calculator 2026 | Find Final Price & Savings",
  // High CTR Description tailored for retail and seasonal sales
  desc: "Instantly calculate your final sale price and exact amount saved with our free discount calculator. Perfect for shopping deals, wholesale, and clearance sales.",
  // AI-Friendly Intro covering real-world shopping scenarios
  intro: "Easily figure out exactly how much you will pay and how much cash you will save during shopping sales. Whether it is a mega Eid sale, Blessed Friday, or a wholesale purchase, just enter the original price and the discount percentage off to instantly see your final payable amount.",
  // 3 Powerful FAQs to capture featured snippets for math and shopping queries
  faq: [
    [
      "How do you calculate a discount percentage mathematically?",
      "To calculate a discount manually, multiply the original price by the discount percentage, then divide by 100 to get the saved amount. Finally, subtract this saved amount from the original price to determine the final sale price."
    ],
    [
      "Can this tool be used for retail shopping and wholesale discounts?",
      "Yes, this calculator is perfect for calculating everyday retail discounts, wholesale bulk purchase margins, and major seasonal sale events like Eid, Blessed Friday, or New Year clearances."
    ],
    [
      "How can I find the original price if I only know the sale price and discount?",
      "To find the original price before a discount was applied, divide the final sale price by (1 minus the discount percentage expressed as a decimal). For example, for a 20% discount, you would divide the final price by 0.80."
    ]
  ]
};

export default function DiscountPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}