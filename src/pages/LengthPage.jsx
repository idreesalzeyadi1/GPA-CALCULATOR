import React from 'react';import Page from '../components/Page.jsx';import Calc from '../calculators/Length.jsx';import {Ruler} from 'lucide-react';
export const meta={slug:'length-converter',name:"Length Converter",icon:Ruler,cat:"Converters",title:"Length Converter \u2013 Feet, Inches, Meters, KM, Miles",desc:"Convert feet, inches, cm, meters, km, yards and miles.",intro:"Simple length conversion between common units.",faq:[["1 foot in cm?","30.48 cm."]]};
export default function LengthPage(){return <Page meta={meta}><Calc/></Page>;}
