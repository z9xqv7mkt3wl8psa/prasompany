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
    // This rule allows you to import JSON files
    config.module.rules.push({
      test: /\.json$/,
      loader: 'json-loader',
      type: 'javascript/auto', // Make sure JSON is treated as JavaScript module
    });
    return config;
  },
};

export default nextConfig;
