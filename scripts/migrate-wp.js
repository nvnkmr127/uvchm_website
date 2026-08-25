const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const TurndownService = require('turndown');

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

const XML_FILE = path.join(__dirname, '../uvchm.WordPress.2026-08-25.xml');
const LOCATIONS_DIR = path.join(__dirname, '../src/content/locations');

async function migrate() {
  const xmlData = fs.readFileSync(XML_FILE, 'utf-8');
  const parser = new xml2js.Parser();
  
  try {
    const result = await parser.parseStringPromise(xmlData);
    const items = result.rss.channel[0].item;

    let articleCount = 0;
    let pageCount = 0;

    for (const item of items) {
      const status = item['wp:status']?.[0];
      const type = item['wp:post_type']?.[0];

      if (status !== 'publish') continue;
      
      const title = item.title?.[0];
      const slug = item['wp:post_name']?.[0];
      const date = item['wp:post_date']?.[0];
      const contentHtml = item['content:encoded']?.[0];

      if (!title || !slug || !contentHtml) continue;

      let markdown = '';
      try {
        markdown = turndownService.turndown(contentHtml);
      } catch (e) {
        console.error(`Error converting HTML for ${slug}`);
        continue;
      }

      // Escape quotes in title
      const cleanTitle = title.replace(/"/g, '\\"');
      
      const frontmatter = `---
title: "${cleanTitle}"
slug: "${slug}"
date: "${date}"
---

`;
      const fileContent = frontmatter + markdown;

      if (type === 'location') {
        fs.writeFileSync(path.join(LOCATIONS_DIR, `${slug}.md`), fileContent);
        articleCount++;
      }
    }

    console.log(`Migration Complete!`);
    console.log(`Imported ${articleCount} articles.`);
    console.log(`Imported ${pageCount} pages.`);
  } catch (err) {
    console.error("Error parsing XML:", err);
  }
}

migrate();
