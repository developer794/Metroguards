/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Prevent optional native deps from breaking the build
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        ws: false,
        'bufferutil': false,
        'utf-8-validate': false,
        'supports-color': false,
      };
  
      // On client builds, exclude them entirely
      if (!isServer) {
        config.externals = [
          ...(config.externals || []),
          'canvas',
          'jsdom',
          'ws',
          'bufferutil',
          'utf-8-validate',
          'supports-color',
        ];
      }
  
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dqaghuhkouihcvqvcsco.supabase.co',
          pathname: '/storage/v1/object/public/**',
        },
      ],
    },
    
    // Security Headers
    async headers() {
      return [
        {
          // Apply security headers to all routes
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=()',
            },
            // Add HSTS only in production with HTTPS
            ...(process.env.NODE_ENV === 'production' ? [{
              key: 'Strict-Transport-Security',
              value: 'max-age=31536000; includeSubDomains; preload',
            }] : []),
          ],
        },
        {
          // Additional protection for API routes
          source: '/api/:path*',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  