import React,{useState} from 'react';import {Res} from '../components/ui.jsx';
export default function Words(){const [s,setS]=useState('');const w=s.trim()?s.trim().split(/\s+/).length:0;
return <div><textarea rows="8" className="input" placeholder="Paste your text here..." value={s} onChange={e=>setS(e.target.value)}/>
<div className="grid grid-cols-2 gap-3">{[['Words',w],['Characters',s.length]].map(([a,b])=><Res key={a} label={a} value={b}/>)}</div></div>}
