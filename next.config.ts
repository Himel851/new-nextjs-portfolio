import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration
  output: 'export',
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable server components completely
  experimental: {
    optimizePackageImports: ['lucide-react'],
    serverComponentsExternalPackages: [],
  },
  
  // Force client-side rendering
  reactStrictMode: false,
  
  // Disable webpack cache and server components
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.cache = false;
    }
    
    // Disable server components in development
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;