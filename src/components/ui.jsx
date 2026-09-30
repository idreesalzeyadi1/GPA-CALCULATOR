import React from 'react';
export const fmt=(n,d=2)=>isFinite(n)?Number(n).toLocaleString('en-US',{maximumFractionDigits:d}):'-';
export const Res=({label,value,sub})=><div className="mt-4 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-5 text-center"><div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div><div className="mt-1 text-3xl font-extrabold text-emerald-700">{value}</div>{sub&&<div className="mt-1 text-xs text-slate-500">{sub}</div>}</div>;
export const F=({l,children})=><label className="block text-xs font-semibold text-slate-600">{l}{children}</label>;
