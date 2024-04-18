/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['ik.imagekit.io'],
  },
};

export default nextConfig;
