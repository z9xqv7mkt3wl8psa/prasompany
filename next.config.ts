import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all external images (less secure)
      },
    ],
  },
  webpack(config) {
    // Remove any custom JSON loader if exists
    const existingRules = config.module.rules;
    config.module.rules = existingRules.filter(rule => rule.loader !== 'json-loader');
    
    return config;
  },
};

export default nextConfig;
