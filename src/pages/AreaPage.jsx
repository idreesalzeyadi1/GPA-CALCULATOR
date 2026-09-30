import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Area.jsx';
import {Square} from 'lucide-react';

export const meta = {
  slug: 'area-converter',
  name: "Area Converter (Marla, Kanal)",
  icon: Square,
  cat: "Converters",
  // Brutal Title with exact Pakistani real estate keywords
  title: "Area Converter 2026 | Marla to Sq Ft, Kanal & Acre Calculator",
  // High CTR Description tailored for property buyers/sellers
  desc: "Instantly convert Pakistani land units. Convert Marla to Square Feet, Kanal to Marla, Square Yards (Gaj), and Acres. Free online property area calculator.",
  // AI-Friendly Intro covering all major unit names
  intro: "Accurately calculate and convert Pakistani real estate and agricultural land units. Whether you are buying a plot in a housing society or measuring rural land, this tool instantly converts between Marla, Kanal, Square Feet (Sq Ft), Square Yards (Gaj), and Acres.",
  // 3 Powerful FAQs specifically answering common real estate confusions in Pakistan
  faq: [
    [
      "How many Square Feet are in 1 Marla in Pakistan?",
      "In Pakistan, the size of a Marla depends on the region. In most modern housing societies (like DHA or Bahria Town) and urban areas, 1 Marla is considered exactly 225 square feet. However, in older revenue records and rural areas, 1 Marla is equal to 272.25 square feet."
    ],
    [
      "How many Marlas are there in 1 Kanal?",
      "According to the standard Pakistani land measurement system, 1 Kanal is always equal to exactly 20 Marlas, regardless of whether the local Marla size is 225 or 272.25 square feet."
    ],
    [
      "How many Kanals make 1 Acre of land?",
      "In the traditional Pakistani land measurement system, 1 Acre is exactly equal to 8 Kanals or 160 Marlas."
    ]
  ]
};

export default function AreaPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}