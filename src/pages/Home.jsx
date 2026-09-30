import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Zap, Smartphone, ShieldCheck } from 'lucide-react';
import { TOOLS, CATS, SITE } from '../tools.js';
import { setMeta } from '../seo.js';

export default function Home() {
  const [q, setQ] = useState('');

  // BRUTAL SEO: High-impact Title and Description targeting exactly what is on your UI
  useEffect(() => {
    setMeta(
      'PakCalc Hub | #1 Free Online Calculators for Pakistan',
      'Access 30+ free online calculators in Pakistan. Accurately calculate ETEA, MDCAT, NUST & Punjab University GPA, Zakat, Salary, and Marla/Kanal conversions.',
      SITE.url + '/',
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE.name,
        url: SITE.url,
        potentialAction: {
          '@type': 'SearchAction',
          target: SITE.url + '/?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    );
  }, []);

  const list = TOOLS.filter(t => (t.name + t.desc).toLowerCase().includes(q.toLowerCase()));

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 p-8 text-white shadow-xl shadow-emerald-200 sm:p-12">
        <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10" />
        <div className="absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-white/10" />
        <div className="relative">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">🇵🇰 Made for Pakistan</span>
          {/* H1 captures the absolute main keyword */}
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
            Free Online Calculators for Pakistan
          </h1>
          {/* Subtitle expanded to include heavy hitters from the image */}
          <p className="mt-3 max-w-xl text-emerald-50">
            Access 30+ tools instantly: ETEA & MDCAT aggregates, COMSATS, NUST & Punjab University GPAs, Salary tax, Zakat, Pension, and Marla conversions. Fast, accurate, and easy on every device.
          </p>
          <div className="relative mt-6 max-w-lg">
            <Search size={18} className="absolute left-4 top-3.5 text-slate-400" />
            <input 
              value={q} 
              onChange={e => setQ(e.target.value)} 
              placeholder="Search e.g. MDCAT aggregate, zakat, marla..." 
              aria-label="Search tools" 
              className="w-full rounded-2xl border-0 py-3 pl-11 pr-4 text-sm text-slate-800 shadow-lg outline-none" 
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
            {[
              [Zap, `${TOOLS.length} free tools`],
              [ShieldCheck, 'No signup'],
              [Smartphone, 'Mobile friendly']
            ].map(([I, t]) => (
              <span key={t} className="flex items-center gap-1.5">
                <I size={15} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR CATEGORIES GRID */}
      {Object.keys(CATS).map(c => {
        const items = list.filter(t => t.cat === c);
        return items.length ? (
          <section key={c} className="mt-10">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold">
              <span className={`h-6 w-1.5 rounded bg-gradient-to-b ${CATS[c].grad}`} />
              {c}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map(t => {
                const I = t.icon;
                return (
                  <Link 
                    key={t.slug} 
                    to={'/' + t.slug} 
                    className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100"
                  >
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${CATS[c].tile}`}>
                      <I size={22} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-bold group-hover:text-emerald-700">{t.name}</h3>
                      <p className="mt-1 line-clamp-2 text-xs text-slate-500">{t.desc}</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-emerald-600">
                        Open calculator <ArrowRight size={13} className="transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null;
      })}

      {/* BRUTAL SEO TEXT BLOCK (E-E-A-T & Keyword Clustering) */}
      <section className="mt-12 rounded-2xl border bg-white p-6 text-sm leading-relaxed text-slate-600">
        <h2 className="mb-3 text-lg font-bold text-slate-800">Why PakCalc Hub?</h2>
        <p className="mb-3">
          PakCalc Hub is the ultimate digital toolkit designed specifically for the Pakistani audience. Whether you are a student aiming for medical college using our MDCAT Aggregate Calculator, securing engineering admissions via the ETEA tool, or calculating semester results for institutions like NUST, Punjab University, COMSATS, and UAF, we provide exact formulas that match official criteria.
        </p>
        <p className="mb-3">
          For professionals and households, our Finance and Utility tools simplify complex daily math. Instantly manage your monthly budget, calculate exact Salary & Allowances, evaluate Loan EMIs, and precisely determine Zakat. We also offer standard local land conversions like Marla, Kanal, and Square Yards (Gaj), alongside traditional gold weights such as Tola and Masha.
        </p>
        <p>
          Maintained by the ICT professionals at RiseDigital Solutions in Peshawar, PakCalc Hub guarantees lightning-fast performance, mobile-friendly design, and 100% free access with absolutely no signups required.
        </p>
      </section>
    </div>
  );
}