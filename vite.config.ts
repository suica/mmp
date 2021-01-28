import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    base:'/mmp/'
  },
  plugins: [reactRefresh()]
})
