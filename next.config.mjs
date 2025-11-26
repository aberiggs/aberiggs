import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
}

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
    theme: 'github-dark',
    keepBackground: false,
}

const withMDX = createMDX({
    options: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
    },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)