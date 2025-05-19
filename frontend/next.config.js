/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // This is essential for static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  // If you're deploying to a subdirectory, uncomment the following:
  // basePath: '',
  // assetPrefix: '',
  trailingSlash: false,
}

module.exports = nextConfig