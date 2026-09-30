import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S btn="Calculate Balance" fields={[{k:'i',l:'Total monthly income'},{k:'r',l:'Rent'},{k:'f',l:'Food'},{k:'u',l:'Utilities'},{k:'o',l:'Other expenses'}]}
compute={n=>{const e=n('r')+n('f')+n('u')+n('o');return [['Remaining balance','Rs. '+fmt(n('i')-e,0),`Total expenses Rs. ${fmt(e,0)}`]]}}/>;
