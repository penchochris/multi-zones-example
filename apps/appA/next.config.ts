import type { NextConfig } from "next";

// Where appB (the "/appB" zone) is running.
const APP_B_URL = process.env.APP_B_URL ?? "http://localhost:3001";

const nextConfig: NextConfig = {
  transpilePackages: ["@multi-zones/shared-ui"],
  async rewrites() {
    return [
      // The appB zone page itself
      { source: "/appB", destination: `${APP_B_URL}/appB` },
      // Everything under it, including appB's own /appB/_next/* assets
      { source: "/appB/:path+", destination: `${APP_B_URL}/appB/:path+` },
    ];
  },
};

export default nextConfig;
