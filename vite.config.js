import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update the SW when a new version is built
      
      // Configuration for the Web App Manifest (Critical for install prompt)
      manifest: {
        name: 'AbracaEye',
        short_name: 'AbracaEye',
        description: 'AbracaEye - Your best blog page',
        theme_color: '#ffffff', // Your app's primary color
        background_color: '#f0f0f0', // The color used on the splash screen
        display: 'standalone', // Opens in a dedicated app window (no browser UI)
        start_url: '/',
        
        // Icons array (Make sure these files exist in your 'public' folder!)
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          // Maskable icon is recommended for Android for better compatibility
          {
            src: '/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      }
    })
  ],
  server: {
    host: true
  }
})
