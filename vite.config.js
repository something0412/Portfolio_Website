import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/phuocle-portfolio/",
});
// "homepage": "https://something0412.github.io/phuocle-portfolio",
//     "predeploy": "npm run build",
//     "deploy": "gh-pages -d dist"
