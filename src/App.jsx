import React from 'react';import {Routes,Route,Navigate} from 'react-router-dom';
import Layout from './components/Layout.jsx';import Home from './pages/Home.jsx';import {TOOLS} from './tools.js';
export default function App(){
  return <Layout><Routes><Route path="/" element={<Home/>}/>
   {TOOLS.map(t=><Route key={t.slug} path={'/'+t.slug} element={<t.Page/>}/>)}
   <Route path="*" element={<Navigate to="/" replace/>}/></Routes></Layout>;
}
