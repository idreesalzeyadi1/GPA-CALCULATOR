import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S fields={[{k:'x',l:'Percent (X%)'},{k:'y',l:'Of number (Y)'},{k:'o',l:'Obtained marks'},{k:'t',l:'Total marks'}]}
compute={(n,v)=>{const r=[];if(v.x&&v.y)r.push([`${v.x}% of ${v.y}`,fmt(n('x')*n('y')/100)]);if(v.o&&v.t)r.push(['Marks percentage',fmt(n('o')/n('t')*100)+'%']);return r}}/>;
