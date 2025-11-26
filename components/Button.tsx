import Link from 'next/link'

export default function Button({
    href,
    children
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            className="inline-block mt-4 px-6 py-3 bg-accent-blue text-background font-medium rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 transform"
        >
            {children}
        </Link>
    )
}

