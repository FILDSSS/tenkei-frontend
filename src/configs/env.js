import * as dotenv from 'dotenv'
dotenv.config()
export const BACKEND_URL = "http://localhost:4000";
export const ENVJS_PORT = process.env.VITE_PORT
// export const VITE_PORT = import.meta.env.VITE_PORT || 5173;