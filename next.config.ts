import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This will disable ESLint during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
