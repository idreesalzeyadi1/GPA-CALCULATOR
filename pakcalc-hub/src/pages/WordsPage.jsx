import React from 'react';import Page from '../components/Page.jsx';import Calc from '../calculators/Words.jsx';import {Type} from 'lucide-react';
export const meta={slug:'word-counter',name:"Word & Character Counter",icon:Type,cat:"Utility",title:"Word & Character Counter \u2013 Count Words & Characters",desc:"Free online word and character counter.",intro:"Paste text to count words and characters instantly.",faq:[["Does it count spaces?","Character count includes spaces."]]};
export default function WordsPage(){return <Page meta={meta}><Calc/></Page>;}
