import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S fields={[{k:'a',l:'Amount (before tax)'},{k:'r',l:'Tax rate %',d:18}]}
compute={n=>[['Total with tax','Rs. '+fmt(n('a')*(1+n('r')/100)),'Tax Rs. '+fmt(n('a')*n('r')/100)]]}/>;
