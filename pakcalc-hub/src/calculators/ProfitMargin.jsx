import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S fields={[{k:'c',l:'Cost price'},{k:'s',l:'Selling price'}]}
compute={n=>{const p=n('s')-n('c');return [['Profit / Loss','Rs. '+fmt(p),`Margin ${fmt(n('s')?p/n('s')*100:0)}% · Markup ${fmt(n('c')?p/n('c')*100:0)}%`]]}}/>;
