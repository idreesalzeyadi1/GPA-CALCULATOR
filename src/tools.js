
export const SITE={name:'PakCalc Hub',url:'https://etea-calculator.vercel.app'};
export const CATS={
 'Admissions & Jobs':{tile:'bg-rose-100 text-rose-600',grad:'from-rose-500 to-orange-400'},
 'Education':{tile:'bg-emerald-100 text-emerald-600',grad:'from-emerald-600 to-teal-500'},
 'Finance':{tile:'bg-blue-100 text-blue-600',grad:'from-blue-600 to-indigo-500'},
 'Converters':{tile:'bg-amber-100 text-amber-600',grad:'from-amber-500 to-orange-500'},
 'Utility':{tile:'bg-violet-100 text-violet-600',grad:'from-violet-600 to-purple-500'}};

// Every file in src/pages/ ending with Page.jsx is auto-registered (route + sidebar + home card + sitemap).
const mods=import.meta.glob('./pages/*Page.jsx',{eager:true});
export const TOOLS=Object.values(mods).filter(m=>m.meta).map(m=>({...m.meta,Page:m.default}));
