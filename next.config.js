
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove or modify the output configuration
  output: 'standalone', // Changed from 'export' to 'standalone'
  
  // Ensure API routes work properly
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Increase body size limit for audio data
    },
  },
  
  // Set proper API location for static export
  // Remove this line if you're not doing static export
  // api_location: "",
  
  // Allow importing from external sources
  experimental: {
    serverComponentsExternalPackages: ['pyodide'],
  },
  
  // Ensure proper CORS headers if needed
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;