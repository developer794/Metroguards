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
  };
  
  module.exports = nextConfig;
  