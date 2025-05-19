/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // This is essential for static exports
  // Disable image optimization since it requires a server
  images: {
    unoptimized: true,
  },
  // Set a proper base path if you're not deploying to the root domain
  // basePath: '',
  // If you're deploying to a subdirectory
  // assetPrefix: '',
  // Ensure trailing slashes are not used (Azure SWA prefers this)
  trailingSlash: false,
}

module.exports = nextConfig