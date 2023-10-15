/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: [""],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    BACKEND_URL: "http://localhost:8081",
  },
  eslint: {
    rules: {
      "no-mixed-quotes": ["error", "always", { allowTemplateLiterals: true }],
    },
  },
};

module.exports = nextConfig;
