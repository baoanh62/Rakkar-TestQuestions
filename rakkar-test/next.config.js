/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
//    outputFileTracingRoot: path.join(__dirname, '../../'),
  },   
}

module.exports = nextConfig
