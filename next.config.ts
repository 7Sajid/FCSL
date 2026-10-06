import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/market/update',
        destination: '/markets/updates',
        permanent: true,
      },
      {
        source: '/market/news',
        destination: '/markets/news',
        permanent: true,
      },
      {
        source: '/market/indices',
        destination: '/markets/indices',
        permanent: true,
      },
      {
        source: '/market/:path*',
        destination: '/markets/:path*',
        permanent: true,
      },
      {
        source: '/market',
        destination: '/markets',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
