import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all external images (less secure)
      },
    ],
  },
  webpack(config: Configuration) {
    // Remove any custom JSON loader if exists
    const existingRules = config.module?.rules as any[]; // Explicitly type it as an array
    config.module!.rules = existingRules.filter((rule: any) => rule.loader !== 'json-loader');
    
    return config;
  },
};

export default nextConfig;
