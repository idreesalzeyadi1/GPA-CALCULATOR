import React,{useState} from 'react';import {Link,NavLink} from 'react-router-dom';import {Search,Calculator} from 'lucide-react';
import {TOOLS,CATS,SITE} from '../tools.js';
function Sidebar(){
  const [q,setQ]=useState('');const list=TOOLS.filter(t=>t.name.toLowerCase().includes(q.toLowerCase()));
  return <aside className="w-full shrink-0 lg:w-80"><div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 lg:sticky lg:top-20">
   <div className="border-b bg-gradient-to-r from-emerald-50 to-teal-50 p-4"><div className="relative"><Search size={16} className="absolute left-3 top-3 text-slate-400"/>
    <input className="input pl-9" placeholder={`Search ${TOOLS.length} tools...`} value={q} onChange={e=>setQ(e.target.value)} aria-label="Search calculators"/></div></div>
   <nav aria-label="All calculators" className="scroll max-h-[60vh] overflow-y-auto p-3 lg:max-h-[calc(100vh-190px)]">
    {Object.keys(CATS).map(c=>{const items=list.filter(t=>t.cat===c);return items.length?<div key={c} className="mb-3">
     <div className="mb-1 px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">{c}</div>
     {items.map(t=>{const I=t.icon;return <NavLink key={t.slug} to={'/'+t.slug} className={({isActive})=>`group flex items-center gap-3 rounded-xl px-2 py-2 text-sm font-semibold transition ${isActive?'bg-emerald-600 text-white shadow-md shadow-emerald-200':'text-slate-700 hover:bg-slate-50'}`}>
      {({isActive})=><><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isActive?'bg-white/20 text-white':CATS[c].tile}`}><I size={16}/></span><span className="truncate">{t.name}</span></>}</NavLink>})}</div>:null})}
    {!list.length&&<p className="p-4 text-center text-sm text-slate-400">No tool found</p>}</nav></div></aside>;
}
export default function Layout({children}){
  return <div className="flex min-h-screen flex-col"><header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
   <Link to="/" className="flex items-center gap-2"><span className="rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 p-2 text-white shadow"><Calculator size={18}/></span><span className="text-xl font-extrabold">Pak<span className="text-emerald-600">Calc</span> Hub</span></Link>
   <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">100% FREE</span></div></header>
   <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-6 lg:flex-row"><main className="min-w-0 flex-1">{children}</main><Sidebar/></div>
   <footer className="border-t bg-white py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} {SITE.name} · Results are estimates for guidance only.</footer></div>;
}
