import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES ? '/onepage/' : '',
};

export default nextConfig;
