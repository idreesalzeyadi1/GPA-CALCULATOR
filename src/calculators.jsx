import React,{useState} from 'react';
const CUI=[['A',4],['A-',3.67],['B+',3.33],['B',3],['B-',2.67],['C+',2.33],['C',2],['C-',1.67],['D+',1.33],['D',1],['F',0]];
const GEN=[['A+',4],...CUI];
const fmt=(n,d=2)=>isFinite(n)?Number(n).toLocaleString('en-US',{maximumFractionDigits:d}):'-';
const Res=({label,value,sub})=><div className="result"><div className="text-xs text-slate-500">{label}</div><div className="text-3xl font-extrabold text-brand-dark">{value}</div>{sub&&<div className="mt-1 text-xs text-slate-500">{sub}</div>}</div>;
const F=({l,children})=><label className="block text-xs font-semibold text-slate-600">{l}{children}</label>;
const Num=({l,v,s,ph})=><F l={l}><input type="number" min="0" className="input mt-1" value={v} placeholder={ph} onChange={e=>s(e.target.value)}/></F>;

function Gpa({scale}){
  const [rows,setRows]=useState([{n:'',g:scale[0][1],c:3}]);const [r,setR]=useState(null);
  const up=(i,k,v)=>setRows(rows.map((x,j)=>j===i?{...x,[k]:v}:x));
  const calc=()=>{let p=0,c=0;rows.forEach(x=>{const cr=+x.c||0;p+=(+x.g)*cr;c+=cr});setR({gpa:c?p/c:0,c,p})};
  return <div>{rows.map((x,i)=><div key={i} className="mb-2 grid grid-cols-12 gap-2 rounded-lg bg-slate-50 p-2">
    <input className="input col-span-5" placeholder="Course name" value={x.n} onChange={e=>up(i,'n',e.target.value)}/>
    <select className="input col-span-4" value={x.g} onChange={e=>up(i,'g',e.target.value)}>{scale.map(([a,b])=><option key={a} value={b}>{a} ({b})</option>)}</select>
    <input type="number" className="input col-span-2" value={x.c} onChange={e=>up(i,'c',e.target.value)}/>
    <button aria-label="Remove" className="col-span-1 text-red-500" onClick={()=>setRows(rows.filter((_,j)=>j!==i))}>✕</button></div>)}
  <div className="mt-3 grid grid-cols-2 gap-3"><button className="btn2" onClick={()=>setRows([...rows,{n:'',g:scale[0][1],c:3}])}>Add Subject</button><button className="btn" onClick={calc}>Calculate GPA</button></div>
  {r&&<Res label="Your GPA" value={r.gpa.toFixed(2)} sub={`${r.c} credit hours · ${fmt(r.p)} quality points`}/>}</div>;
}
function Cgpa(){
  const [rows,setRows]=useState([{g:'',c:''}]);const [r,setR]=useState(null);
  const up=(i,k,v)=>setRows(rows.map((x,j)=>j===i?{...x,[k]:v}:x));
  const calc=()=>{let p=0,c=0;rows.forEach(x=>{p+=(+x.g||0)*(+x.c||0);c+=+x.c||0});setR(c?p/c:0)};
  return <div>{rows.map((x,i)=><div key={i} className="mb-2 grid grid-cols-12 gap-2 rounded-lg bg-slate-50 p-2">
    <span className="col-span-2 self-center text-xs font-bold">Sem {i+1}</span>
    <input type="number" className="input col-span-4" placeholder="GPA" value={x.g} onChange={e=>up(i,'g',e.target.value)}/>
    <input type="number" className="input col-span-5" placeholder="Credit hours" value={x.c} onChange={e=>up(i,'c',e.target.value)}/>
    <button aria-label="Remove" className="col-span-1 text-red-500" onClick={()=>setRows(rows.filter((_,j)=>j!==i))}>✕</button></div>)}
  <div className="mt-3 grid grid-cols-2 gap-3"><button className="btn2" onClick={()=>setRows([...rows,{g:'',c:''}])}>Add Semester</button><button className="btn" onClick={calc}>Calculate CGPA</button></div>
  {r!==null&&<Res label="Your CGPA" value={r.toFixed(2)}/>}</div>;
}
function Percent(){
  const [o,setO]=useState('');const [t,setT]=useState('');const [x,setX]=useState('');const [y,setY]=useState('');
  return <div className="space-y-4"><div className="grid grid-cols-2 gap-3"><Num l="Obtained marks" v={o} s={setO}/><Num l="Total marks" v={t} s={setT}/></div>
  {o&&t&&<Res label="Percentage" value={fmt(o/t*100)+'%'}/>}
  <div className="grid grid-cols-2 gap-3"><Num l="Percent (X%)" v={x} s={setX}/><Num l="Of number (Y)" v={y} s={setY}/></div>
  {x&&y&&<Res label={`${x}% of ${y}`} value={fmt(x*y/100)}/>}</div>;
}
function Salary(){
  const [s,setS]=useState('');const [p,setP]=useState('');const n=s*(1+p/100);
  return <div className="space-y-3"><Num l="Current monthly salary" v={s} s={setS} ph="e.g. 80000"/><Num l="Increment %" v={p} s={setP} ph="e.g. 10"/>
  {s&&p&&<><Res label="New monthly salary" value={fmt(n,0)} sub={`Increase: ${fmt(n-s,0)} / month`}/><Res label="New yearly salary" value={fmt(n*12,0)}/></>}</div>;
}
function Zakat(){
  const k=['Nisab value (PKR)','Cash & bank','Gold value','Silver value','Investments','Business stock','Money owed to you','Debts you owe'];
  const [v,setV]=useState(Array(8).fill(''));const [r,setR]=useState(null);
  const calc=()=>{const a=v.map(x=>+x||0);const net=a[1]+a[2]+a[3]+a[4]+a[5]+a[6]-a[7];setR({net,due:net>=a[0]&&a[0]>0?net*0.025:0,ok:net>=a[0]})};
  return <div className="space-y-3"><div className="grid grid-cols-2 gap-3">{k.map((l,i)=><Num key={l} l={l} v={v[i]} s={x=>setV(v.map((y,j)=>j===i?x:y))}/>)}</div>
  <button className="btn w-full" onClick={calc}>Calculate Zakat</button>
  {r&&<Res label="Zakat payable (2.5%)" value={fmt(r.due,0)} sub={`Net wealth ${fmt(r.net,0)} · ${r.ok?'above':'below'} nisab`}/>}</div>;
}
function Age(){
  const [d,setD]=useState('');const [a,setA]=useState(new Date().toISOString().slice(0,10));
  let out=null;if(d){const b=new Date(d),e=new Date(a);let y=e.getFullYear()-b.getFullYear(),m=e.getMonth()-b.getMonth(),dd=e.getDate()-b.getDate();
  if(dd<0){m--;dd+=new Date(e.getFullYear(),e.getMonth(),0).getDate()}if(m<0){y--;m+=12}
  let nb=new Date(e.getFullYear(),b.getMonth(),b.getDate());if(nb<=e)nb.setFullYear(e.getFullYear()+1);out={y,m,dd,n:Math.ceil((nb-e)/864e5),days:Math.floor((e-b)/864e5)}}
  return <div className="space-y-3"><F l="Date of birth"><input type="date" className="input mt-1" value={d} onChange={e=>setD(e.target.value)}/></F>
  <F l="Age at date"><input type="date" className="input mt-1" value={a} onChange={e=>setA(e.target.value)}/></F>
  {out&&(out.y>=0?<Res label="Your age" value={`${out.y}y ${out.m}m ${out.dd}d`} sub={`${fmt(out.days,0)} days lived · next birthday in ${out.n} days`}/>:<p className="text-red-500 text-sm">Date of birth is after the selected date.</p>)}</div>;
}
function Discount(){
  const [p,setP]=useState('');const [d,setD]=useState('');const s=p*d/100;
  return <div className="space-y-3"><Num l="Original price" v={p} s={setP}/><Num l="Discount %" v={d} s={setD}/>{p&&d&&<><Res label="Final price" value={fmt(p-s)}/><Res label="You save" value={fmt(s)}/></>}</div>;
}
const U={
 area:{sq_ft:.09290304,marla:25.2929,kanal:505.857,sq_yd:.83612736,acre:4046.8564,sq_m:1},
 weight:{gram:.001,kg:1,tola:.0116638,seer:.933105,maund:37.3242,pound:.45359237,ounce:.0283495},
 length:{mm:.001,cm:.01,inch:.0254,foot:.3048,yard:.9144,meter:1,km:1000,mile:1609.344}};
function Conv({type}){
  const temp=type==='temp';const units=temp?{celsius:1,fahrenheit:1,kelvin:1}:U[type];const keys=Object.keys(units);
  const [v,setV]=useState('1');const [f,setF]=useState(keys[0]);const [t,setT]=useState(keys[1]);
  const conv=()=>{const n=+v;if(!temp)return n*units[f]/units[t];
   const c=f==='celsius'?n:f==='fahrenheit'?(n-32)*5/9:n-273.15;return t==='celsius'?c:t==='fahrenheit'?c*9/5+32:c+273.15};
  return <div className="space-y-3"><Num l="Value" v={v} s={setV}/><div className="grid grid-cols-2 gap-3">
  <F l="From"><select className="input mt-1" value={f} onChange={e=>setF(e.target.value)}>{keys.map(k=><option key={k}>{k}</option>)}</select></F>
  <F l="To"><select className="input mt-1" value={t} onChange={e=>setT(e.target.value)}>{keys.map(k=><option key={k}>{k}</option>)}</select></F></div>
  <Res label={`${v} ${f} =`} value={`${fmt(conv(),6)} ${t}`}/></div>;
}
function Words(){
  const [s,setS]=useState('');const w=s.trim()?s.trim().split(/\s+/).length:0;
  return <div><textarea rows="8" className="input" placeholder="Paste your text here..." value={s} onChange={e=>setS(e.target.value)}/>
  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">{[['Words',w],['Characters',s.length],['No spaces',s.replace(/\s/g,'').length],['Read time (min)',Math.ceil(w/200)]].map(([a,b])=><Res key={a} label={a} value={b}/>)}</div></div>;
}
export const CALCS={'comsats-gpa-calculator':<Gpa scale={CUI}/>,'gpa-calculator':<Gpa scale={GEN}/>,'cgpa-calculator':<Cgpa/>,'percentage-calculator':<Percent/>,
'salary-increment-calculator':<Salary/>,'zakat-calculator':<Zakat/>,'age-calculator':<Age/>,'discount-calculator':<Discount/>,
'area-converter':<Conv type="area"/>,'weight-converter':<Conv type="weight"/>,'length-converter':<Conv type="length"/>,'temperature-converter':<Conv type="temp"/>,'word-counter':<Words/>};
