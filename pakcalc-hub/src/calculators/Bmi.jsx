import S from '../components/Simple.jsx';
export default ()=><S btn="Calculate BMI" fields={[{k:'w',l:'Weight (kg)'},{k:'h',l:'Height (cm)'}]}
compute={n=>{const b=n('w')/Math.pow(n('h')/100,2);if(!isFinite(b))return [];return [['Your BMI',b.toFixed(1),b<18.5?'Underweight':b<25?'Normal':b<30?'Overweight':'Obese']]}}/>;
