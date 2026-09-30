import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S btn="Calculate EMI" fields={[{k:'p',l:'Loan amount (PKR)'},{k:'r',l:'Annual interest rate %'},{k:'m',l:'Duration (months)'}]}
compute={n=>{const P=n('p'),r=n('r')/1200,m=n('m');const e=r?P*r*Math.pow(1+r,m)/(Math.pow(1+r,m)-1):P/(m||1);return [['Monthly installment','Rs. '+fmt(e,0),`Total payment Rs. ${fmt(e*m,0)} · Interest Rs. ${fmt(e*m-P,0)}`]]}}/>;
