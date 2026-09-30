import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Weight.jsx';
import {Scale} from 'lucide-react';

export const meta = {
  slug: 'weight-converter',
  name: "Weight Converter (Tola, Seer, Maund)",
  icon: Scale,
  cat: "Converters",
  // Brutal H1 / Meta Title targeting both traditional Pakistani and metric weights
  title: "Weight Converter 2026 | Tola, Seer, Maund, KG & Pounds",
  // High CTR Description tailored for local markets and traditional measurements
  desc: "Free weight converter in Pakistan. Instantly convert traditional units like Tola, Seer, and Maund (Man) to Kilograms (KG), Grams, Pounds, and Ounces.",
  // AI-Friendly Intro covering both local mandis and modern metrics
  intro: "A unique and essential tool bridging traditional South Asian weight measurements with modern metric standards. Whether you are dealing with wholesale grain in the local mandi using Maunds and Seers, weighing precious items in Tolas, or converting to Kilograms and Pounds, this calculator provides instant accuracy.",
  // 3 Powerful FAQs to secure Featured Snippets for traditional weight conversions
  faq: [
    [
      "How many kilograms are in 1 Maund (Man) in Pakistan?",
      "In traditional South Asian and Pakistani local markets, 1 Maund (commonly known as Man) is officially equivalent to 40 Seers, which equals exactly 37.324 Kilograms (kg)."
    ],
    [
      "How many grams are in 1 Seer?",
      "Under the traditional weight system used across Pakistani local grain and grocery bazaars, 1 Seer is equal to approximately 933.1 grams (or 0.933 kg)."
    ],
    [
      "How do you convert traditional Tola weight into standard Grams?",
      "1 Tola—widely used for precious metals and specific local measurements—is precisely equal to 11.664 grams. You can easily convert multiple Tolas into kilograms or grams using this tool."
    ]
  ]
};

export default function WeightPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}