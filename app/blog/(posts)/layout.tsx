import Link from 'next/link'
import { FaArrowLeft, FaHome } from 'react-icons/fa'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background-elevated border-b border-border backdrop-blur-sm bg-opacity-90">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
            >
              <FaHome className="group-hover:scale-110 transform transition-transform" />
              <span className="font-medium">Home</span>
            </Link>

            <Link
              href="/blog"
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transform transition-transform" />
              <span className="font-medium">Back</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <article className="mdx-content">
          {children}
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} Abe Riggs IV. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

