import S from '../components/Simple.jsx';
export default ()=><S btn="Convert" fields={[{k:'o',l:'Marks obtained'},{k:'t',l:'Total marks',d:1100},{k:'g',l:'GPA (out of 4)'},{k:'p',l:'Percentage'}]}
compute={(n,v)=>{const r=[];if(v.o)r.push(['Marks to percentage',(n('o')/(n('t')||1100)*100).toFixed(2)+'%']);if(v.g)r.push(['GPA to percentage',(n('g')/4*100).toFixed(2)+'%']);if(v.p)r.push(['Percentage to GPA',(n('p')/100*4).toFixed(2)+' GPA']);return r}}/>;
