import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // relative paths, required for loading the build as a Chrome extension
    base: './',
    build: {
        outDir: 'build',
    },
    server: {
        port: 3000,
    },
})
