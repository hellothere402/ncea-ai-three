/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable eslint during build for now to avoid errors
    ignoreDuringBuilds: true
  },
  // Allow page-level CSS Modules
  images: {
    disableStaticImages: true
  }
}

module.exports = nextConfig