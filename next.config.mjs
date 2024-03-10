/** @type {import('next').NextConfig} */

const basePath =
  process.env.NODE_ENV === 'production' ? '/nextjs-mdx-learning' : ''

const nextConfig = {
  basePath: basePath,
  output: 'export',
  reactStrictMode: true,
  images: {
    // unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
}

export default nextConfig
