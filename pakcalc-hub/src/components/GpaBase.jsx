import React,{useState} from 'react';import {Res,fmt} from './ui.jsx';
export const CUI=[['A',4],['A-',3.67],['B+',3.33],['B',3],['B-',2.67],['C+',2.33],['C',2],['C-',1.67],['D+',1.33],['D',1],['F',0]];
export const NUST=[['A',4],['B+',3.5],['B',3],['C+',2.5],['C',2],['D+',1.5],['D',1],['F',0]];
export const GEN=[['A',4],['A-',3.7],['B+',3.3],['B',3],['B-',2.7],['C+',2.3],['C',2],['C-',1.7],['D',1],['F',0]];
export default function GpaBase({scale}){
  const blank=()=>({n:'',g:scale[Math.min(3,scale.length-1)][1],c:3});
  const [rows,setRows]=useState([blank()]);const [r,setR]=useState(null);
  const up=(i,k,v)=>setRows(rows.map((x,j)=>j===i?{...x,[k]:v}:x));
  const calc=()=>{let p=0,c=0;rows.forEach(x=>{const cr=+x.c||0;p+=(+x.g)*cr;c+=cr});setR({gpa:c?p/c:0,c,p})};
  return <div>{rows.map((x,i)=><div key={i} className="mb-2 grid grid-cols-12 gap-2 rounded-xl bg-slate-50 p-2">
   <input className="input col-span-5" placeholder="Course name" value={x.n} onChange={e=>up(i,'n',e.target.value)}/>
   <select className="input col-span-4" value={x.g} onChange={e=>up(i,'g',e.target.value)}>{scale.map(([a,b])=><option key={a} value={b}>{a} ({b})</option>)}</select>
   <input type="number" className="input col-span-2" value={x.c} onChange={e=>up(i,'c',e.target.value)}/>
   <button aria-label="Remove" className="col-span-1 text-rose-500" onClick={()=>setRows(rows.filter((_,j)=>j!==i))}>✕</button></div>)}
  <div className="mt-3 grid grid-cols-2 gap-3"><button className="btn2" onClick={()=>setRows([...rows,blank()])}>+ Add Subject</button><button className="btn" onClick={calc}>Calculate GPA</button></div>
  {r&&<Res label="Your GPA" value={r.gpa.toFixed(2)+' / 4.00'} sub={`${r.c} credit hours · ${fmt(r.p)} quality points`}/>}</div>;
}
