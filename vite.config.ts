import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { resolve } = require('path')
import fs from "fs"
import os from "os"

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: './build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [
    react(),
  ],
  define: {
    __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
    'process.env': {},
  },
  server: process.env.DEV_SERVER && {
    open: true,
    host: "local.autodeskforma.eu",
    port: 3001,
    https: {
      key: fs.readFileSync(`${os.homedir()}/.spacemaker-cli/server.pem`),
      cert: fs.readFileSync(`${os.homedir()}/.spacemaker-cli/cert.pem`),
    },
    proxy: {
      "/api": {
        target: "https://app.autodeskforma.eu/",
        changeOrigin: true,
      },
      "/app": {
        target: "https://app.autodeskforma.eu/",
        changeOrigin: true,
      },
      "/texture": {
        target: "https://app.autodeskforma.eu/",
        changeOrigin: true,
      },
      "/web-components": {
        target: "https://app.autodeskforma.eu/",
        changeOrigin: true,
      },
      "/design-system": {
        target: "https://app.autodeskforma.eu/",
        changeOrigin: true,
      }
    }
  }
})