export default function imageLoader({ src }) {
  const path =
    process.env.NEXT_PUBLIC_NODE_ENV === 'test' ? '/nextjs-mdx-learning' : ''
  return path + `${src}`
}
