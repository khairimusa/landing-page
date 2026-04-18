const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com/khairimusa',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
