'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { getAllPosts, getAllTags } from '@/lib/posts'
import BlogPostCard from '@/components/BlogPostCard'
import { FaHome, FaFilter } from 'react-icons/fa'

export default function BlogDirectory() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const allPosts = getAllPosts()
    const allTags = getAllTags()

    const filteredPosts = useMemo(() => {
        if (!selectedTag) return allPosts
        return allPosts.filter(post => post.tags?.includes(selectedTag))
    }, [selectedTag, allPosts])

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-background-elevated border-b border-border backdrop-blur-sm bg-opacity-90">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
                        >
                            <FaHome className="group-hover:scale-110 transform transition-transform" />
                            <span className="font-medium">Home</span>
                        </Link>

                        <div className="w-20" /> {/* Spacer for centering */}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        All Posts
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Thoughts on software, projects, and experiments in code.
                    </p>
                </div>

                {/* Tag Filter */}
                {allTags.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3">
                            <FaFilter className="text-text-secondary text-sm" />
                            <h3 className="text-text-secondary text-sm font-medium uppercase tracking-wide">
                                Filter by Tag
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedTag(null)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedTag === null
                                    ? 'bg-accent-blue text-background'
                                    : 'bg-background-elevated text-text-secondary hover:bg-background-overlay border border-border'
                                    }`}
                            >
                                All Posts ({allPosts.length})
                            </button>
                            {allTags.map((tag) => {
                                const count = allPosts.filter(post => post.tags?.includes(tag)).length
                                return (
                                    <button
                                        key={tag}
                                        onClick={() => setSelectedTag(tag)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedTag === tag
                                            ? 'bg-accent-blue text-background'
                                            : 'bg-background-elevated text-text-secondary hover:bg-background-overlay border border-border'
                                            }`}
                                    >
                                        {tag} ({count})
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Posts Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredPosts.map((post) => (
                            <BlogPostCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-text-secondary text-lg">
                            No posts found with the tag &quot;{selectedTag}&quot;
                        </p>
                        <button
                            onClick={() => setSelectedTag(null)}
                            className="mt-4 link"
                        >
                            Clear filter
                        </button>
                    </div>
                )}

            </main>

            {/* Footer */}
            <footer className="mt-20 py-8 border-t border-border">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-text-tertiary text-sm">
                            © {new Date().getFullYear()} Abe Riggs IV. All Rights Reserved.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="/"
                                className="text-text-link hover:text-text-link-hover text-sm transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="https://github.com/aberiggs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-link hover:text-text-link-hover text-sm transition-colors"
                            >
                                GitHub
                            </Link>
                            <Link
                                href="https://linkedin.com/in/aberiggs4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-link hover:text-text-link-hover text-sm transition-colors"
                            >
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

