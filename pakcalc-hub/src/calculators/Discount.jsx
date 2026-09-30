import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S fields={[{k:'p',l:'Original price'},{k:'d',l:'Discount %'}]} compute={n=>[['Final price','Rs. '+fmt(n('p')*(1-n('d')/100)),'You save Rs. '+fmt(n('p')*n('d')/100)]]}/>;
