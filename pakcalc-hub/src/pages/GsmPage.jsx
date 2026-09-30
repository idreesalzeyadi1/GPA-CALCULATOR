import React from 'react';import Page from '../components/Page.jsx';import Calc from '../calculators/Gsm.jsx';import {Shirt} from 'lucide-react';
export const meta={slug:'textile-gsm-converter',name:"Textile Yard & GSM Converter",icon:Shirt,cat:"Converters",title:"Textile Yard & GSM Converter \u2013 oz/yd\u00b2 to GSM",desc:"Convert fabric weight between oz/yd\u00b2 and GSM.",intro:"Textile fabric weight converter. 1 oz/yd\u00b2 equals 33.906 GSM.",faq:[["How to convert oz/yd\u00b2 to GSM?","Multiply by 33.906."]]};
export default function GsmPage(){return <Page meta={meta}><Calc/></Page>;}
