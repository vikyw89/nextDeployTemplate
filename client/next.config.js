/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  trailingSlash:true,
  basePath: '/nextDeployTemplate'
}

module.exports = nextConfig
