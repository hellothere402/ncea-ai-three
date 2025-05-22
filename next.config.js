/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  

  // Keep it simple for now
  swcMinify: true,
  
  // Only include this if you're NOT doing static export
  experimental: {
    appDir: false, // Set to false if you're using pages directory
  },
}

module.exports = nextConfig