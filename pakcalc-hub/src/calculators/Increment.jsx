import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S fields={[{k:'s',l:'Current monthly salary'},{k:'p',l:'Increment %'}]}
compute={n=>{const x=n('s')*(1+n('p')/100);return [['New monthly salary','Rs. '+fmt(x,0),'Increase Rs. '+fmt(x-n('s'),0)],['New yearly salary','Rs. '+fmt(x*12,0)]]}}/>;
