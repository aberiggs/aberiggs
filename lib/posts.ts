// Utility to manage blog posts metadata

export interface PostMetadata {
    slug: string
    title: string
    date: string
    description: string
    tags?: string[]
    author?: string
    featured?: boolean
}

// Manually maintain a list of posts with metadata
// In the future, you could automate this with a build script
export const posts: PostMetadata[] = [
    {
        slug: 'hello',
        title: 'Hello, World!',
        date: '2025-11-22',
        description: 'Welcome to my blog!',
        tags: ['Meta'],
        featured: true,
    },
]

// Get all posts sorted by date (newest first)
export function getAllPosts(): PostMetadata[] {
    return posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}

// Get posts by tag
export function getPostsByTag(tag: string): PostMetadata[] {
    return posts
        .filter(post => post.tags?.includes(tag))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get featured posts
export function getFeaturedPosts(): PostMetadata[] {
    return posts
        .filter(post => post.featured)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get all unique tags
export function getAllTags(): string[] {
    const tags = new Set<string>()
    posts.forEach(post => {
        post.tags?.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
}

// Format date for display
export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

