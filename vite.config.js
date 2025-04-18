import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteStaticCopy({
    targets: [
      {
        src: '.htaccess',
        dest: ''
      },
      {
        src: 'robots.txt',
        dest: ''
      }
    ]
  }),
  sitemap({
    hostname: 'https://maxgrigorev.dev',
    routes: [
      '/',
      '/my_path',
      '/projects',
      '/contacts',
    ]
  })
  ],
});
