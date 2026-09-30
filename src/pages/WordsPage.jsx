import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Words.jsx';
import {Type} from 'lucide-react';

export const meta = {
  slug: 'word-counter',
  name: "Word & Character Counter",
  icon: Type,
  cat: "Utility",
  // Brutal H1 / Meta Title targeting online writing and content metrics
  title: "Word & Character Counter 2026 | Free Text & Paragraph Statistics",
  // High CTR Description tailored for writers, students, and content creators
  desc: "Free online word and character counter tool in Pakistan. Instantly count words, characters with/without spaces, sentences, and paragraphs for your essays and posts.",
  // AI-Friendly Intro covering student and professional writing use cases
  intro: "An essential digital writing assistant for students, bloggers, copywriters, and content creators. Simply paste your article, essay, or social media caption to instantly track your exact word count, character count (with and without spaces), paragraph total, and estimated reading time.",
  // 3 Powerful FAQs to secure Featured Snippets for text calculation queries
  faq: [
    [
      "Does the character count include spaces and punctuation marks?",
      "Yes! Our tool provides both metrics: a total character count that includes all spaces and punctuation marks, alongside a clean character count excluding spaces if required by strict form limits."
    ],
    [
      "Is this word counter free and secure for private documents?",
      "Yes, 100% free with no signups required. Furthermore, your text is processed directly within your browser window, ensuring complete privacy and security for your personal or professional writings."
    ],
    [
      "How is the reading time estimated by this tool?",
      "Reading time is calculated using the global average human reading speed of approximately 200 to 250 words per minute, giving you an accurate estimate of how long your text will take to read."
    ]
  ]
};

export default function WordsPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}