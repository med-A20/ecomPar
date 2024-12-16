/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns : [
      {
        protocol: 'http',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      }
    ],
  },
};

module.exports = nextConfig;
