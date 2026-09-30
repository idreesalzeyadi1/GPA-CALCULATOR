import S from '../components/Simple.jsx';import {fmt} from '../components/ui.jsx';
export default ()=><S btn="Calculate Gold Value" fields={[{k:'t',l:'Tola'},{k:'m',l:'Masha'},{k:'r',l:'Todays rate per tola (PKR)'}]}
compute={n=>{const t=n('t')+n('m')/12;return [['Gold value','Rs. '+fmt(t*n('r'),0),`${fmt(t,3)} tola = ${fmt(t*11.6638)} grams`]]}}/>;
