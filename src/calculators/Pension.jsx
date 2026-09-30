import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S btn="Estimate Pension" fields={[{k:'p',l:'Last basic pay (PKR)'},{k:'y',l:'Service years'}]}
compute={n=>[['Estimated monthly pension','Rs. '+fmt(n('p')*n('y')/50,0),'Estimate only. Confirm with your department / AG office.']]}/>;
