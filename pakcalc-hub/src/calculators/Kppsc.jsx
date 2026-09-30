import S from '../components/Simple.jsx';
export default ()=><S btn="Calculate KPPSC Score" fields={[{k:'a',l:'Matric %'},{k:'b',l:'Inter %'},{k:'c',l:'Bachelor %'},{k:'d',l:'Master %'},{k:'e',l:'B.Ed %'},{k:'t',l:'Test marks (out of 45)'},
{k:'hifz',l:'Hifz (+3)',check:1},{k:'mphil',l:'MPhil (+1)',check:1},{k:'phd',l:'PhD (+2)',check:1},{k:'top',l:'Topper bonus',d:0,opts:[['Not a topper',0],['Topper (+1)',1],['BS Topper (+2)',2]]}]}
compute={(n,v)=>{const a=['a','b','c','d','e'].map(n).filter(x=>x>0);const avg=a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
return [['KPPSC Score',(avg/100*20+n('t')+(v.hifz?3:0)+(v.mphil?1:0)+(v.phd?2:0)+n('top')).toFixed(2)+' / 100']]}}/>;
