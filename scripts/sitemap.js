import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const pagesDir = path.join(projectRoot, 'src', 'pages');
const siteUrl = 'https://www.gpa-calculator.space';

const toKebabCase = (value) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase();

const pageFiles = fs.existsSync(pagesDir)
  ? fs.readdirSync(pagesDir)
  : [];

const routes = ['/'];
for (const file of pageFiles) {
  if (!file.endsWith('Page.jsx')) continue;
  if (file === 'HomePage.jsx' || file === 'ToolPage.jsx') continue;
  const routeName = file.replace(/Page\.jsx$/, '');
  routes.push(`/${toKebabCase(routeName)}`);
}

const uniqueRoutes = [...new Set(routes)];
const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map((route) => {
    const priority = route === '/' ? '1.0' : '0.8';
    const changefreq = route === '/' ? 'daily' : 'weekly';
    return `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n')}
</urlset>
`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap ok ${uniqueRoutes.length} urls`);
