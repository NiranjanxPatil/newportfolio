/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Add @svgr/webpack to handle SVG imports
      config.module.rules.push({
        test: /\.svg$/i, // Target .svg files
        issuer: /\.[jt]sx?$/, // Apply this rule to JavaScript/TypeScript files
        use: ['@svgr/webpack'], // Use @svgr/webpack to handle SVGs as React components
      });
  
      return config; // Return the modified config
    }
  };
  
  module.exports = nextConfig;
  