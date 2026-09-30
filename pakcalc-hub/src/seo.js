export function setMeta(title,desc,url,ld){
  document.title=title;
  const put=(sel,mk,a)=>{let e=document.head.querySelector(sel);if(!e){e=document.createElement(mk);document.head.appendChild(e)}Object.entries(a).forEach(([k,v])=>e.setAttribute(k,v))};
  put('meta[name=description]','meta',{name:'description',content:desc});
  put('link[rel=canonical]','link',{rel:'canonical',href:url});
  put('meta[property="og:title"]','meta',{property:'og:title',content:title});
  put('meta[property="og:description"]','meta',{property:'og:description',content:desc});
  put('meta[property="og:url"]','meta',{property:'og:url',content:url});
  let s=document.getElementById('ld');if(!s){s=document.createElement('script');s.id='ld';s.type='application/ld+json';document.head.appendChild(s)}
  s.textContent=JSON.stringify(ld||{});
}
