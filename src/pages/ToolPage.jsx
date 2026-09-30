import React,{useEffect} from 'react';import {Link} from 'react-router-dom';import {ChevronRight} from 'lucide-react';
import {CATS,SITE,TOOLS} from '../tools.js';import {setMeta} from '../seo.js';
export default function ToolPage({tool:t}){
  const I=t.icon,Comp=t.Comp,url=SITE.url+'/'+t.slug,rel=TOOLS.filter(x=>x.cat===t.cat&&x.slug!==t.slug).slice(0,5);
  useEffect(()=>{window.scrollTo(0,0);setMeta(t.title,t.desc,url,{'@context':'https://schema.org','@graph':[
   {'@type':'WebApplication',name:t.name,url,applicationCategory:'UtilitiesApplication',operatingSystem:'Any',offers:{'@type':'Offer',price:'0',priceCurrency:'PKR'}},
   {'@type':'FAQPage',mainEntity:t.faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))},
   {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:SITE.url},{'@type':'ListItem',position:2,name:t.name,item:url}]}]})},[t]);
  return <article>
   <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-1 text-xs text-slate-500"><Link to="/" className="hover:text-emerald-600">Home</Link><ChevronRight size={12}/><span>{t.cat}</span><ChevronRight size={12}/><span className="font-semibold text-slate-700">{t.name}</span></nav>
   <div className={`rounded-t-3xl bg-gradient-to-r ${CATS[t.cat].grad} p-6 text-white`}><div className="flex items-center gap-4"><span className="rounded-2xl bg-white/20 p-3"><I size={28}/></span>
    <div><h1 className="text-2xl font-extrabold">{t.name}</h1><p className="mt-1 text-sm text-white/90">{t.desc}</p></div></div></div>
   <div className="rounded-b-3xl border border-t-0 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-7"><Comp/></div>
   <section className="mt-6 rounded-2xl border bg-white p-6"><h2 className="text-lg font-bold">About the {t.name}</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">{t.intro}</p>
    <h2 className="mt-5 text-lg font-bold">Frequently Asked Questions</h2>{t.faq.map(([q,a])=><div key={q} className="mt-3 rounded-xl bg-slate-50 p-3"><h3 className="text-sm font-bold">{q}</h3><p className="mt-1 text-sm text-slate-600">{a}</p></div>)}</section>
   <section className="mt-6"><h2 className="mb-2 text-lg font-bold">Related calculators</h2><div className="flex flex-wrap gap-2">{rel.map(r=><Link key={r.slug} to={'/'+r.slug} className="rounded-full border bg-white px-3 py-1.5 text-sm font-medium hover:border-emerald-400 hover:text-emerald-700">{r.name}</Link>)}</div></section></article>;
}
