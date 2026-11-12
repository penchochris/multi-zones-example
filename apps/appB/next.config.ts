import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route and asset of this zone lives under /appB, so appA can proxy
  // /appB/* here without colliding with its own routes or /_next assets.
  basePath: "/appB",
  transpilePackages: ["@multi-zones/shared-ui"],
};

export default nextConfig;
