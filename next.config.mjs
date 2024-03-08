/** @type {import('next').NextConfig} */

function imageLoader(src) {
  return `/nextjs-mdx-learning/${src}`
}

const nextConfig = {
  images: {
    loader: imageLoader,
    // loaderFile: './src/app/image-loader.js',
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
