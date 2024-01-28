/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "digitalhippo-production-b947.up.railway.app",
      },
    ],
  },
}

module.exports = nextConfig

