import S from '../components/Simple.jsx';
export default ()=><S btn="Convert" fields={[{k:'oz',l:'oz/yd²'},{k:'g',l:'GSM'}]}
compute={(n,v)=>{const r=[];if(v.oz)r.push(['oz/yd² to GSM',(n('oz')*33.9057575).toFixed(2)+' GSM']);if(v.g)r.push(['GSM to oz/yd²',(n('g')/33.9057575).toFixed(2)+' oz/yd²']);return r}}/>;
