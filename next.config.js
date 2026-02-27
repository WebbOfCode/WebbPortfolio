/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled to prevent double-mounting/ghosting in development
  reactStrictMode: false,
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