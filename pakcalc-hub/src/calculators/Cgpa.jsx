import React,{useState} from 'react';import {Res} from '../components/ui.jsx';
export default function Cgpa(){
  const [rows,setRows]=useState([{g:'',c:''}]);const [r,setR]=useState(null);
  const up=(i,k,v)=>setRows(rows.map((x,j)=>j===i?{...x,[k]:v}:x));
  const calc=()=>{let p=0,c=0;rows.forEach(x=>{p+=(+x.g||0)*(+x.c||0);c+=+x.c||0});setR(c?p/c:0)};
  return <div>{rows.map((x,i)=><div key={i} className="mb-2 grid grid-cols-12 gap-2 rounded-xl bg-slate-50 p-2">
   <span className="col-span-2 self-center text-xs font-bold">Sem {i+1}</span>
   <input type="number" className="input col-span-4" placeholder="GPA" value={x.g} onChange={e=>up(i,'g',e.target.value)}/>
   <input type="number" className="input col-span-5" placeholder="Credit hours" value={x.c} onChange={e=>up(i,'c',e.target.value)}/>
   <button aria-label="Remove" className="col-span-1 text-rose-500" onClick={()=>setRows(rows.filter((_,j)=>j!==i))}>✕</button></div>)}
  <div className="mt-3 grid grid-cols-2 gap-3"><button className="btn2" onClick={()=>setRows([...rows,{g:'',c:''}])}>+ Add Semester</button><button className="btn" onClick={calc}>Calculate CGPA</button></div>
  {r!==null&&<Res label="Your CGPA" value={r.toFixed(2)}/>}</div>;
}
