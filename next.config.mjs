/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/nextjs-mdx-learning',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
}

export default nextConfig
