import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Temperature.jsx';
import {Thermometer} from 'lucide-react';

export const meta = {
  slug: 'temperature-converter',
  name: "Temperature Converter",
  icon: Thermometer,
  cat: "Converters",
  // Brutal H1 / Meta Title targeting the main temperature scales
  title: "Temperature Converter 2026 | Celsius, Fahrenheit & Kelvin",
  // High CTR Description tailored for quick and accurate conversions
  desc: "Free online temperature converter. Instantly convert values between Celsius (°C), Fahrenheit (°F), and Kelvin (K) with accurate formulas.",
  // AI-Friendly Intro covering everyday and scientific use-cases
  intro: "Quickly convert temperature readings between the three standard global scales: Celsius, Fahrenheit, and Kelvin. Whether you are checking weather forecasts, baking recipes, or solving physics and chemistry problems, simply enter your value to see instant and precise conversions.",
  // 3 Powerful FAQs to secure Featured Snippets for temperature formulas
  faq: [
    [
      "How do you convert Celsius to Fahrenheit?",
      "To convert Celsius to Fahrenheit, multiply the Celsius temperature by 9/5 (or 1.8) and then add 32 to the result: F = (C x 9/5) + 32."
    ],
    [
      "How do you convert Fahrenheit to Celsius?",
      "To convert Fahrenheit to Celsius, subtract 32 from the Fahrenheit temperature, and then multiply the result by 5/9 (or approximately 0.5556): C = (F - 32) x 5/9."
    ],
    [
      "What is the formula to convert Celsius to Kelvin?",
      "To convert Celsius to Kelvin, simply add 273.15 to the Celsius temperature: K = C + 273.15. Kelvin is widely used in thermodynamics and scientific calculations."
    ]
  ]
};

export default function TemperaturePage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}