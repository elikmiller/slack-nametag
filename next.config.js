/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a.slack-edge.com"],
  },
};

module.exports = nextConfig;
