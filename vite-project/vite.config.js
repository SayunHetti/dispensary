import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://dispensary-booking-system.azurewebsites.net',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
