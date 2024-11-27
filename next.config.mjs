/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "jsonplaceholder.typicode.com",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
