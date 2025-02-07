/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/moving-cursor-blend/' : '',
  basePath: isProd ? '/moving-cursor-blend' : '',
  output: 'export'
};

export default nextConfig;