import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Gsm.jsx';
import {Shirt} from 'lucide-react';

export const meta = {
  slug: 'textile-gsm-converter',
  name: "Textile Yard & GSM Converter",
  icon: Shirt,
  cat: "Converters",
  // Brutal Meta Title targeting the exact metric conversion terms
  title: "Textile GSM Converter 2026 | oz/yd² to GSM Fabric Weight",
  // High CTR Description tailored for Pakistani merchandisers and exporters
  desc: "Free online textile fabric weight converter. Instantly convert oz/yd² to GSM (Grams per Square Meter) and vice versa. Perfect for garment merchandisers and exporters.",
  // AI-Ready Intro heavily loaded with local textile hub keywords
  intro: "An essential tool for the textile industry, especially for garment merchandisers, buyers, and manufacturers in major textile hubs like Faisalabad, Lahore, and Karachi. Quickly convert fabric weights between Ounces per Square Yard (oz/yd²) and Grams per Square Meter (GSM) to ensure accurate fabric sourcing and export quality compliance.",
  // 3 Powerful FAQs to secure Featured Snippets for textile definitions and formulas
  faq: [
    [
      "How do you convert oz/yd² to GSM mathematically?",
      "To convert Ounces per Square Yard (oz/yd²) to Grams per Square Meter (GSM), simply multiply the oz/yd² value by 33.906. Conversely, to convert GSM back to oz/yd², divide the GSM value by 33.906."
    ],
    [
      "What does GSM mean in the textile and garment industry?",
      "GSM stands for 'Grams per Square Meter'. It is the standard metric measurement used globally to determine the physical weight and density of a fabric. A higher GSM typically indicates a thicker, heavier, and often warmer fabric (like fleece or denim)."
    ],
    [
      "Why is exact GSM calculation important for fabric exports?",
      "Accurate GSM calculation is crucial for precise fabric costing, determining total yarn consumption, and meeting strict international buyer specifications. It ensures that export orders meet the exact quality standards demanded by global brands."
    ]
  ]
};

export default function GsmPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}