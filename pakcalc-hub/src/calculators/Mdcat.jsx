import S from '../components/Simple.jsx';
export default ()=><S btn="Calculate MDCAT Aggregate" fields={[{k:'mo',l:'Matric obtained'},{k:'mt',l:'Matric total',d:1100},{k:'fo',l:'FSc obtained'},{k:'ft',l:'FSc total',d:1100},{k:'to',l:'MDCAT obtained'},{k:'tt',l:'MDCAT total',d:200}]}
compute={n=>[['MDCAT Aggregate',(n('mo')/(n('mt')||1100)*10+n('fo')/(n('ft')||1100)*40+n('to')/(n('tt')||200)*50).toFixed(2)+'%','Weights: Matric 10% · FSc 40% · MDCAT 50%']]}/>;
