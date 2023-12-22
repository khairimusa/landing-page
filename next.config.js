/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/landing-page",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing-page",
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
