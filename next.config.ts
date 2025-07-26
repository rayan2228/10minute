import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.10minuteschool.com/**")],
  },
};

export default nextConfig;
