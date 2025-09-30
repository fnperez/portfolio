/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/", // all paths go to index for SPA
      },
    ];
  },
};

module.exports = nextConfig;
