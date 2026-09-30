import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S btn="Calculate Zakat" fields={[{k:'ns',l:'Nisab value (PKR)'},{k:'c',l:'Cash & bank'},{k:'g',l:'Gold value'},{k:'s',l:'Silver value'},{k:'i',l:'Investments'},{k:'b',l:'Business stock'},{k:'d',l:'Debts you owe'}]}
compute={n=>{const net=n('c')+n('g')+n('s')+n('i')+n('b')-n('d');const ok=n('ns')>0&&net>=n('ns');return [['Zakat payable (2.5%)','Rs. '+fmt(ok?net*.025:0,0),`Net wealth Rs. ${fmt(net,0)} · ${ok?'above':'below / nisab not entered'}`]]}}/>;
