/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
      "images.leafly.com",
      "images.leafly.com",
    ],
  },
};

module.exports = nextConfig;
