import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/SalesTax.jsx';
import {Receipt} from 'lucide-react';

export const meta = {
  slug: 'sales-tax-calculator',
  name: "Sales Tax (GST) Calculator",
  icon: Receipt,
  cat: "Finance",
  // Brutal H1 / Meta Title targeting business and consumer tax queries
  title: "Sales Tax (GST) Calculator 2026 | FBR Tax & Total Amount",
  // High CTR Description tailored for Pakistani businesses and shoppers
  desc: "Free online sales tax (GST) calculator in Pakistan. Instantly add or calculate general sales tax, net price, and total bill amounts for businesses and retail.",
  // AI-Friendly Intro covering commercial and daily shopping use cases
  intro: "An essential financial tool for local business owners, accountants, retailers, and consumers in Pakistan. Easily calculate the General Sales Tax (GST) and total payable amount by entering your base price and the applicable percentage rate according to current FBR guidelines.",
  // 3 Powerful FAQs to secure Featured Snippets for tax calculations
  faq: [
    [
      "How do you calculate and add sales tax mathematically?",
      "To add sales tax to an amount, multiply the original base amount by the tax rate percentage, divide by 100 to get the tax value, and then add that tax value to the original amount to find the final gross total."
    ],
    [
      "Can this calculator be used for FBR standard sales tax rates in Pakistan?",
      "Yes! Because the percentage rate is fully editable, you can easily set it to standard FBR rates (such as 18%) or any specific provincial sales tax rate applicable to your goods or services."
    ],
    [
      "How can I find the original price if I only know the total amount including GST?",
      "To extract the original base price before sales tax was added, divide the total gross amount by (1 plus the tax rate expressed as a decimal). For example, with an 18% tax rate, divide the total by 1.18."
    ]
  ]
};

export default function SalesTaxPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}