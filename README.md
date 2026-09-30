# PakCalc Hub
npm install && npm run dev   |   npm run build (creates dist + sitemap.xml)
1. Use your live domain in src/tools.js and public/robots.txt.
2. Deploy dist/ on Vercel/Netlify (rewrites included).
3. Submit /sitemap.xml in Google Search Console.
Add a calculator: create src/calculators/Name.jsx, then add one entry in src/tools.js (slug, name, icon, cat, Comp, SEO text). Route + sitemap are automatic.
