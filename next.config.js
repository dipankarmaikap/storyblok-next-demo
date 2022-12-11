/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  swcMinify: true,
  images: {
    domains: ["a.storyblok.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
