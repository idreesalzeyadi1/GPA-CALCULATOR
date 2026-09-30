import React,{useState} from 'react';import {F,Res,fmt} from './ui.jsx';
export default function Converter({units,temp}){
  const keys=Object.keys(units);const [v,setV]=useState('1');const [f,setF]=useState(keys[0]);const [t,setT]=useState(keys[1]);
  const conv=()=>{const n=+v||0;if(!temp)return n*units[f]/units[t];const c=f==='Celsius'?n:f==='Fahrenheit'?(n-32)*5/9:n-273.15;return t==='Celsius'?c:t==='Fahrenheit'?c*9/5+32:c+273.15};
  const S=({val,set,l})=><F l={l}><select className="input mt-1" value={val} onChange={e=>set(e.target.value)}>{keys.map(k=><option key={k}>{k}</option>)}</select></F>;
  return <div className="space-y-3"><F l="Value"><input type="number" className="input mt-1" value={v} onChange={e=>setV(e.target.value)}/></F>
  <div className="grid grid-cols-2 gap-3"><S l="From" val={f} set={setF}/><S l="To" val={t} set={setT}/></div>
  <Res label={`${v||0} ${f} =`} value={`${fmt(conv(),6)} ${t}`}/></div>;
}
