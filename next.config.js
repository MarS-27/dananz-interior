/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  compiler: {
    styledComponents: true | {
      displayName: true,
      ssr: true,
    },
  },
}

module.exports = nextConfig
