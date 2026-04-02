/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: "/qa/:path*",
        destination: "/:path*",
      },
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
