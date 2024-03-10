export default function imageLoader({ src }) {
  const path = process.env.NODE_ENV === 'test' ? '/nextjs-mdx-learning' : ''
  return path + `${src}`
}
