import Link from 'next/link'
import { PostMetadata, formatDate } from '@/lib/posts'

interface BlogPostCardProps {
    post: PostMetadata
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="card hover:border-border-accent transition-all group block"
        >
            <div className="flex flex-col h-full">
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-blue transition-colors mb-2">
                        {post.title}
                    </h3>

                    <p className="text-text-tertiary text-sm mb-3">
                        {formatDate(post.date)}
                        {post.author && ` • ${post.author}`}
                    </p>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {post.description}
                    </p>
                </div>

                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded bg-code-inline-bg text-text-secondary border border-border-subtle hover:border-border transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    )
}

