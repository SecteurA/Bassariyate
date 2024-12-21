/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'data.wget.ma',
        pathname: '/bassariyate/**',
      },
      {
        protocol: 'https',
        hostname: 'media.afflelou.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;