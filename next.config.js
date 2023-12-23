/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfolio',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/portfolio',
        basePath: false,
        permanent: false,
        statusCode: 301,
      },
    ];
  },
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
