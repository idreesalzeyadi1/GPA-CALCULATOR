import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Gold.jsx';
import {Coins} from 'lucide-react';

export const meta = {
  slug: 'gold-tola-calculator',
  name: "Gold Tola Calculator",
  icon: Coins,
  cat: "Converters",
  // Brutal H1 / Meta Title targeting real-world gold conversion queries
  title: "Gold Tola Calculator 2026 | Tola, Masha to Grams & PKR Value",
  // High CTR Description tailored for the Pakistani jewelry market
  desc: "Free Pakistan gold calculator. Instantly convert Tola and Masha to Grams, and calculate your exact gold value in PKR based on today's Sarafa Bazar rates.",
  // AI-Friendly Intro covering specific use-cases like Zakat and weddings
  intro: "An essential tool for jewelry buyers, sellers, and Zakat calculations in Pakistan. Quickly convert traditional gold weights like Tola and Masha into standard Grams, and accurately calculate the total value of your gold in Pakistani Rupees (PKR) using today's local Sarafa Bazar rate.",
  // 3 Powerful FAQs to secure Featured Snippets for gold weight confusions
  faq: [
    [
      "How many grams are in 1 Tola of gold in Pakistan?",
      "In the Pakistani jewelry market (Sarafa Bazar), 1 Tola of gold is standardly equal to 11.664 grams. Therefore, a standard 10-gram gold bar is slightly less than one full Tola."
    ],
    [
      "How many Masha make up 1 Tola?",
      "According to the traditional South Asian gold weight system widely used by jewelers in Pakistan, 1 Tola consists of exactly 12 Masha. Furthermore, 1 Masha is equal to 8 Ratti."
    ],
    [
      "How can I calculate the exact PKR value of my gold jewelry?",
      "To find the exact value in Pakistani Rupees, simply enter today's live gold rate per Tola, then input your jewelry's weight in Tolas and Mashas. Our calculator will instantly compute the final total price for you."
    ]
  ]
};

export default function GoldPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}