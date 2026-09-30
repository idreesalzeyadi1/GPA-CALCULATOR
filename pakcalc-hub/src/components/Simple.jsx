import React,{useState} from 'react';import {F,Res} from './ui.jsx';
// Generic form calculator: fields -> compute(n, v) -> [[label,value,sub],...]
export default function Simple({fields,compute,btn='Calculate'}){
  const [v,setV]=useState(Object.fromEntries(fields.map(f=>[f.k,f.d??''])));const [r,setR]=useState(null);
  const set=(k,x)=>setV(p=>({...p,[k]:x}));const n=k=>parseFloat(v[k])||0;
  return <div><div className="grid gap-3 sm:grid-cols-2">{fields.map(f=>f.check
   ?<label key={f.k} className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm font-medium"><input type="checkbox" checked={!!v[f.k]} onChange={e=>set(f.k,e.target.checked)}/>{f.l}</label>
   :<F key={f.k} l={f.l}>{f.opts
     ?<select className="input mt-1" value={v[f.k]} onChange={e=>set(f.k,e.target.value)}>{f.opts.map(([a,b])=><option key={b} value={b}>{a}</option>)}</select>
     :<input type={f.t||'number'} min={f.t?undefined:0} className="input mt-1" placeholder={f.p} value={v[f.k]} onChange={e=>set(f.k,e.target.value)}/>}</F>)}</div>
  <button className="btn mt-4 w-full" onClick={()=>setR(compute(n,v))}>{btn}</button>
  {r&&r.map(([l,val,s])=><Res key={l} label={l} value={val} sub={s}/>)}</div>;
}
