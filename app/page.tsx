import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import BannerPhoto from '../public/FilmPhoto.jpg'
import HomeContent from './home-content.mdx'

// Social Link Component
function SocialLink({
  href,
  icon: Icon,
  label
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group"
    >
      <Icon className="text-text-primary hover:text-accent-blue w-8 h-8 lg:w-10 lg:h-10 transition-colors duration-200 group-hover:scale-110 transform" />
    </a>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* Main Content Container */}
      <div className="flex-1 w-full max-w-4xl px-6 sm:px-10 py-12">

        {/* Hero Section */}
        <div className="space-y-8">
          {/* Banner Image */}
          <div className="w-full overflow-hidden rounded-lg border border-border shadow-xl">
            <Image
              priority={true}
              className="object-cover w-full h-auto"
              src={BannerPhoto}
              alt="Photo of Seattle skyline"
            />
          </div>

          {/* Intro */}
          <div className="space-y-4">
            <h1 className="text-text-primary font-bold text-4xl sm:text-5xl xl:text-6xl">
              Hi, I&apos;m <span className="text-accent-blue">Sprocket</span>
            </h1>

            <h2 className="text-text-secondary text-lg sm:text-xl xl:text-2xl">
              Software Engineer
            </h2>

            {/* Social Links */}
            <div className="flex flex-row gap-6 items-center">
              <SocialLink
                href="https://github.com/aberiggs"
                icon={FaGithub}
                label="GitHub Profile"
              />
              <SocialLink
                href="https://linkedin.com/in/aberiggs4"
                icon={FaLinkedin}
                label="LinkedIn Profile"
              />
              <SocialLink
                href="mailto:aberiggsiv@gmail.com"
                icon={FaEnvelope}
                label="Email"
              />
            </div>
          </div>
        </div>

        <br />

        <HomeContent />
      </div>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-border">
        <p className="text-center text-text-tertiary text-sm">
          © {new Date().getFullYear()} Abe Riggs IV. All Rights Reserved.
        </p>
      </footer>
    </main>
  )
}
