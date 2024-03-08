/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/app/image-loader.js',
  },
  basePath: '/nextjs-mdx-learning',
  // assetPrefix: '/nextjs-mdx-learning/',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
