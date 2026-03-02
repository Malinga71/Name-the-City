import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Name-the-City',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
