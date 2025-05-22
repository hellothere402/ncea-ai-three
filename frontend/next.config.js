/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // IMPORTANT: Do NOT include any of these:
  // output: 'export',
  // trailingSlash: true,
  // distDir: 'out',
  
  // For Azure Static Web Apps with API support
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig