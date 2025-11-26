import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

// Custom components for MDX
const components: MDXComponents = {
    // Headings with clean styling
    h1: ({ children }) => (
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mt-8 mb-4 pb-2 border-b border-border">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-8 mb-4 pb-2 border-b border-border">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mt-6 mb-3">
            {children}
        </h3>
    ),
    h4: ({ children }) => (
        <h4 className="text-xl md:text-2xl font-semibold text-text-primary mt-5 mb-2">
            {children}
        </h4>
    ),
    h5: ({ children }) => (
        <h5 className="text-lg md:text-xl font-semibold text-text-primary mt-4 mb-2">
            {children}
        </h5>
    ),
    h6: ({ children }) => (
        <h6 className="text-base md:text-lg font-semibold text-text-secondary mt-4 mb-2">
            {children}
        </h6>
    ),

    // Paragraphs
    p: ({ children }) => (
        <p className="text-text-primary text-base md:text-lg leading-relaxed mb-4">
            {children}
        </p>
    ),

    // Links with hover effects
    a: ({ href, children }) => (
        <Link
            href={href || '#'}
            className="text-text-link hover:text-text-link-hover underline decoration-1 underline-offset-2 hover:decoration-2 transition-all"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            {children}
        </Link>
    ),

    // Inline code
    code: ({ children, className, ...props }) => {
        // If it has a className, it's a code block (handled by rehype-pretty-code)
        if (className) {
            return <code className={className} {...props}>{children}</code>
        }
        // Inline code
        return (
            <code className="px-1.5 py-0.5 rounded bg-code-inline-bg text-code-inline-text font-mono text-sm border border-border-subtle">
                {children}
            </code>
        )
    },

    // Code blocks (styled for rehype-pretty-code output)
    pre: ({ children, ...props }) => (
        <pre className="bg-code-bg border border-border rounded-lg p-4 overflow-x-auto mb-4 text-sm md:text-base" {...props}>
            {children}
        </pre>
    ),

    // Lists
    ul: ({ children }) => (
        <ul className="list-disc list-inside text-text-primary mb-4 space-y-2 ml-4">
            {children}
        </ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal list-inside text-text-primary mb-4 space-y-2 ml-4">
            {children}
        </ol>
    ),
    li: ({ children }) => (
        <li className="text-base md:text-lg leading-relaxed">{children}</li>
    ),

    // Blockquotes
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-border-accent pl-4 py-2 my-4 bg-background-subtle rounded-r italic text-text-secondary">
            {children}
        </blockquote>
    ),

    // Horizontal rules
    hr: () => <hr className="my-8 border-border" />,

    // Tables
    table: ({ children }) => (
        <div className="overflow-x-auto mb-4">
            <table className="min-w-full border-collapse border border-border">
                {children}
            </table>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="bg-background-elevated">{children}</thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
        <tr className="border-b border-border hover:bg-background-subtle transition-colors">
            {children}
        </tr>
    ),
    th: ({ children }) => (
        <th className="px-4 py-2 text-left text-text-primary font-semibold border border-border">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="px-4 py-2 text-text-primary border border-border">
            {children}
        </td>
    ),

    // Images with Next.js optimization
    img: (props) => (
        <span className="block my-6 rounded-lg overflow-hidden border border-border">
            <Image
                {...(props as ImageProps)}
                alt={props.alt || ''}
                width={800}
                height={600}
                className="w-full h-auto"
            />
        </span>
    ),

    // Custom component for callouts/alerts
    Callout: ({ type = 'info', children }: { type?: 'info' | 'warning' | 'success' | 'error'; children: React.ReactNode }) => {
        const styles = {
            info: 'border-accent-blue bg-accent-blue/10',
            warning: 'border-accent-yellow bg-accent-yellow/10',
            success: 'border-accent-green bg-accent-green/10',
            error: 'border-accent-red bg-accent-red/10',
        }
        return (
            <div className={`my-4 p-4 rounded-lg border-l-4 ${styles[type]}`}>
                <div className="text-text-primary">{children}</div>
            </div>
        )
    },
}

export function useMDXComponents(otherComponents: MDXComponents = {}): MDXComponents {
    return {
        ...components,
        ...otherComponents,
    }
}