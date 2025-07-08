import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/inventory-management-system-project',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
