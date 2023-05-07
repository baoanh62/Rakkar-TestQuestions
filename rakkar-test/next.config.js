/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
    externalDir: true | {
      enabled: true,
      silent: true,
    },
    //    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  // Potential new config flag:
  disableExperimentalFeaturesWarning: true
}

module.exports = nextConfig
