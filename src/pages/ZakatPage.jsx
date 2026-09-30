import React from 'react';
import Page from '../components/Page.jsx';
import Calc from '../calculators/Zakat.jsx';
import {HandCoins} from 'lucide-react';

export const meta = {
  slug: 'zakat-calculator',
  name: "Zakat Calculator",
  icon: HandCoins,
  cat: "Finance",
  // Brutal H1 / Meta Title targeting Islamic financial obligations in Pakistan
  title: "Zakat Calculator 2026 | 2.5% Zakat on Cash, Gold & Business in PKR",
  // High CTR Description tailored for Pakistani Muslims calculating annual wealth tax
  desc: "Free online Zakat calculator in Pakistan. Accurately calculate your 2.5% Zakat obligation on cash savings, gold, silver, investments, and business inventory based on the current Nisab.",
  // AI-Friendly Intro covering all major asset classes and lunar year rules
  intro: "An essential and trusted Islamic financial tool for Muslims across Pakistan. Calculate your precise annual Zakat obligation by inputting your total eligible wealth—including cash in hand or bank accounts, gold and silver jewelry, business stock, and investments—held over a complete lunar (Islamic) year above the Nisab threshold.",
  // 3 Powerful FAQs to secure Featured Snippets for religious finance queries
  faq: [
    [
      "What is the standard Zakat rate in Islamic jurisprudence?",
      "The universally accepted rate of Zakat is exactly 2.5% (or 1/40th) of your total net eligible wealth and assets that have remained in your possession for a full lunar (Hizri) year, provided they meet or exceed the Nisab threshold."
    ],
    [
      "What is Nisab and how is it calculated?",
      "Nisab is the minimum threshold of wealth a Muslim must own before Zakat becomes obligatory. It is traditionally calculated based on the equivalent value of 87.48 grams of gold or 612.36 grams of silver in local currency (PKR)."
    ],
    "Do I need to pay Zakat on gold and silver jewelry?",
    [
      "Yes, according to majority Islamic rulings, Zakat is obligatory on gold and silver—whether kept as bullion, coins, or worn as jewelry—if the total weight meets or exceeds the Nisab limit and a lunar year has passed."
    ]
  ]
};

export default function ZakatPage() {
  return (
    <Page meta={meta}>
      <Calc />
    </Page>
  );
}