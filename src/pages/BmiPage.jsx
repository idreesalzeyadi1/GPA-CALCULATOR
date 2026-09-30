import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Bmi.jsx';
import {Activity} from 'lucide-react';

export const meta = {
  slug: 'bmi-calculator',
  name: "BMI Calculator",
  icon: Activity,
  cat: "Utility",
  // Brutal H1 / Meta Title targeting high search volume keywords
  title: "BMI Calculator 2026 | Check Body Mass Index (kg & cm)",
  // High CTR Description highlighting WHO standards
  desc: "Free and accurate BMI calculator. Enter your weight (kg) and height (cm/feet) to check your Body Mass Index and find your ideal weight category based on WHO standards.",
  // AI-ready Intro for Google Overviews
  intro: "Quickly assess your health status with our free Body Mass Index (BMI) Calculator. Simply input your weight and height to discover whether you are underweight, normal weight, overweight, or obese. This tool uses official World Health Organization (WHO) criteria to provide a general health indicator (note: this is for informational purposes and not professional medical advice).",
  // 3 Powerful FAQs for Google Rich Snippets & 'People Also Ask'
  faq: [
    [
      "What is considered a healthy and normal BMI?",
      "According to the World Health Organization (WHO), a normal and healthy BMI ranges strictly from 18.5 to 24.9. A score below 18.5 is considered underweight, 25.0 to 29.9 is overweight, and 30.0 or above indicates obesity."
    ],
    [
      "How is Body Mass Index (BMI) mathematically calculated?",
      "The official formula for BMI is calculated by dividing a person's weight in kilograms by the square of their height in meters (kg/m²). Our online tool automatically performs this math for you instantly using centimeters or feet."
    ],
    [
      "Is the BMI calculation accurate for everyone, including athletes?",
      "While BMI is a widely accepted general screening tool for most adults, it has limitations. It cannot distinguish between muscle mass and body fat. Therefore, highly muscular athletes or bodybuilders may have a 'high' BMI without having excess body fat. It is also not always accurate for pregnant women or the elderly."
    ]
  ]
};

export default function BmiPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}