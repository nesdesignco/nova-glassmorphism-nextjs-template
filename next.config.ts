import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://eneskaymaz.com https://www.eneskaymaz.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
