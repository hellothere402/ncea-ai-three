/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove the output: 'export' line to fix the api_location error
  // output: 'export', // Comment this out or remove it
  
  // Basic configuration for development
  experimental: {
    // Remove any experimental features that might cause issues
  },
  
  // Ensure API routes work
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