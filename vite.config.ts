import { Plugin, defineConfig } from 'vite';

import Markdown from 'markdown-it';
import { readFile } from 'fs/promises';

const md = new Markdown();

const renderMarkdown = async (file: string) => {
  const content = await readFile(file, 'utf-8');
  return md.render(content);
};

function markdownToHtml(): Plugin {
  return {
    name: 'markdown-to-html',
    apply: 'build',
    resolveId(id) {
      if (id.endsWith('.md')) {
        return id;
      }
    },
    async load(id) {
      if (id.endsWith('.md')) {
        const rendered = await renderMarkdown(id);
        return `export default ${JSON.stringify(rendered)};`;
      }
    },
  };
}

export default defineConfig({
  plugins: [markdownToHtml()],
});
