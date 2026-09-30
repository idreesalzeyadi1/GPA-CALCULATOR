import S from '../components/Simple.jsx';
export default ()=><S btn="Calculate ETEA Aggregate" fields={[{k:'mo',l:'Matric obtained'},{k:'mt',l:'Matric total',d:1100},{k:'io',l:'Inter obtained'},{k:'it',l:'Inter total',d:1100},{k:'to',l:'ETEA test obtained'},{k:'tt',l:'ETEA test total',d:200}]}
compute={n=>[['ETEA Aggregate',(n('mo')/(n('mt')||1100)*10+n('io')/(n('it')||1100)*40+n('to')/(n('tt')||200)*50).toFixed(2)+'%','Weights: Matric 10% · Inter 40% · Test 50%']]}/>;
