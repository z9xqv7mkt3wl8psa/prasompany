import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all external images (less secure)
      },
    ],
  },

  webpack(config: Configuration) {
    // Remove any custom JSON loader if exists
    const existingRules = config.module?.rules as any[]; // Explicitly type it as an array
    config.module!.rules = existingRules.filter((rule: any) => rule.loader !== "json-loader");

    // ✅ Fix "canvas" module not found issue
    config.resolve.alias = {
      ...config.resolve.alias,
      "canvas": false, // Prevents pdfjs-dist from using `canvas`
      "fs": false, // Stops "fs" module errors in Next.js
    };

    return config;
  },

  // ✅ Expose environment variables to Next.js
  env: {
    SECRET_KEY: process.env.SECRET_KEY, // Make SECRET_KEY accessible at runtime
  },
};

export default nextConfig;
