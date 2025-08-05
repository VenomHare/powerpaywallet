/** @type {import('next').NextConfig} */
import pwa from 'next-pwa'
const withPWA = pwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false,
  runtimeCaching: [
    {
      urlPattern: /^\/offline\.png$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'offline-image-cache',
        expiration: {
          maxEntries: 1,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
  ],
});

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            }
        ],
    },
};

export default withPWA(nextConfig);
