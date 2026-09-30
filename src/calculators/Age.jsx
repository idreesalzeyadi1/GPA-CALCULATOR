import S from '../components/Simple.jsx';
export default ()=><S btn="Calculate Age" fields={[{k:'d',l:'Date of birth',t:'date'},{k:'a',l:'Age at date',t:'date',d:new Date().toISOString().slice(0,10)}]}
compute={(n,v)=>{if(!v.d)return [];const b=new Date(v.d),e=new Date(v.a);let y=e.getFullYear()-b.getFullYear(),m=e.getMonth()-b.getMonth(),d=e.getDate()-b.getDate();
if(d<0){m--;d+=new Date(e.getFullYear(),e.getMonth(),0).getDate()}if(m<0){y--;m+=12}if(y<0)return [['Error','DOB is after the selected date']];
const nb=new Date(e.getFullYear(),b.getMonth(),b.getDate());if(nb<=e)nb.setFullYear(e.getFullYear()+1);
return [['Your age',`${y}y ${m}m ${d}d`,`${Math.floor((e-b)/864e5).toLocaleString()} days lived · next birthday in ${Math.ceil((nb-e)/864e5)} days`]]}}/>;
