/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress hydration warnings caused by browser extensions (Grammarly, etc.)
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
}

module.exports = nextConfig