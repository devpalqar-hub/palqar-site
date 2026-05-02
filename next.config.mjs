/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  async rewrites() {
    return [
      // {
      //   source: "/qa/:path*",
      //   destination: "/:path*",
      // },
      {
        source: "/usa/:path*",
        destination: "/:path*",
      },
      {
        source: "/in/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
