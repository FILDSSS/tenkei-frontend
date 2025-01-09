import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ENVJS_PORT } from './src/configs/env.js'
import * as dotenv from 'dotenv'

dotenv.config()


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // or 'localhost'
    port: parseInt(ENVJS_PORT) || 5173
  },
})
