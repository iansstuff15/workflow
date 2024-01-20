/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  reactStrictMode: false,
  webpack5: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: config => {
    config.resolve.fallback = { fs: false }

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
