import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  devIndicators: false,
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
