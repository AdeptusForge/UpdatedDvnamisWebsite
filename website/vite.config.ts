import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */})},
    {
      name: 'markdown-loader',
      transform(code, id) {
        if (id.slice(-3) === '.md') {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`;
        }
      }
    },
    react({include: /\.(jsx|js|mdx|md|tsx|ts)$/}),
  ],
})