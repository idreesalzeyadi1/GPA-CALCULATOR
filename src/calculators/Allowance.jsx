import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S btn="Calculate Gross" fields={[{k:'b',l:'Basic pay'},{k:'h',l:'House rent %',d:45},{k:'m',l:'Medical %',d:15}]}
compute={n=>[['Gross salary','Rs. '+fmt(n('b')*(1+(n('h')+n('m'))/100),0),`HRA ${fmt(n('b')*n('h')/100,0)} · Medical ${fmt(n('b')*n('m')/100,0)}`]]}/>;
