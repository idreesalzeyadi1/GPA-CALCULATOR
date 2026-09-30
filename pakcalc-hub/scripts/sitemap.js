import fs from 'fs';
const site=process.env.SITE_URL||'https://etea-calculator.vercel.app';
const slugs=[...fs.readdirSync('src/pages').filter(f=>f.endsWith('Page.jsx')).map(f=>fs.readFileSync('src/pages/'+f,'utf8')).join('\n').matchAll(/slug:'([^']+)'/g)].map(m=>m[1]);
const urls=['',...slugs].map(s=>`<url><loc>${site}/${s}</loc><changefreq>monthly</changefreq><priority>${s?'0.9':'1.0'}</priority></url>`).join('');
fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
fs.writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);
console.log('sitemap ok',slugs.length+1,'urls');
