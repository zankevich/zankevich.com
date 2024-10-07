import type { MetadataRoute } from 'next';
import config from '@/config';


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: config.title,
    short_name: config.author,
    description: config.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0b1e',
    theme_color: '#0a0b1e',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
