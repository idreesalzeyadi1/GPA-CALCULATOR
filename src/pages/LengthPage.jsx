import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Length.jsx';
import {Ruler} from 'lucide-react';

export const meta = {
  slug: 'length-converter',
  name: "Length Converter",
  icon: Ruler,
  cat: "Converters",
  // Brutal H1 / Meta Title targeting all popular length and distance units
  title: "Length Converter 2026 | Feet, Inches, Centimeters, Meters & Miles",
  // High CTR Description tailored for quick and accurate measurements
  desc: "Free online length and distance converter. Instantly convert between feet, inches, centimeters, meters, kilometers, yards, and miles with exact precision.",
  // AI-Friendly Intro covering everyday measurement and construction use cases
  intro: "A fast and precise length conversion tool for students, engineers, architects, and everyday measurements. Whether you are working on a construction blueprint, calculating room dimensions, or converting distance units like feet, inches, meters, or miles, this calculator provides instant results.",
  // 3 Powerful FAQs to secure Featured Snippets for unit conversion formulas
  faq: [
    [
      "How many centimeters are in 1 foot?",
      "1 foot is precisely equal to 30.48 centimeters (cm), which is the standard international metric conversion factor used globally."
    ],
    [
      "How do you convert inches to centimeters?",
      "To convert inches to centimeters, multiply the given inch value by 2.54, since exactly 1 inch equals 2.54 cm."
    ],
    [
      "How many feet are in a yard?",
      "1 yard is equal to exactly 3 feet (or 36 inches). Yards are commonly used in field measurements, textiles, and sports dimensions."
    ]
  ]
};

export default function LengthPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}