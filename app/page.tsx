import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import BannerPhoto from '../public/FilmPhoto.jpg'

// Section Component for better organization
function Section({
  title,
  children,
  className = ""
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`w-full ${className}`}>
      <h3 className="text-text-primary text-xl lg:text-2xl font-semibold mb-3 pb-2 border-b border-border">
        {title}
      </h3>
      <div className="text-text-primary text-base lg:text-lg leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  )
}

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
              Student • Fullstack Developer • Photographer
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

        {/* Bio Section */}
        <Section title="Bio">
          <p>
            My real name is Abe, but all my friends know me as Sprocket! I&apos;m an aspiring software
            engineer from Seattle, Washington, and currently majoring in Computer Science at Purdue University.
          </p>
        </Section>

        {/* Experience Section */}
        <Section title="Experience" className="mt-12">
          <p>
            This past summer I was an intern at{' '}
            <a
              className="link"
              href="https://rndgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The RND Group
            </a>
            , which is a medical device software company based in Indianapolis, Indiana. I was a
            software developer on the NeuMoDx project, an FDA approved device shipped internationally
            that allows for testing of various diseases at large scales. I worked on tasks like resolving
            defects in user options and sample running menus that operators interact with daily that
            impacted security and usability, creating audits that allow for the logging and monitoring
            of user actions, and correcting filtering so that operators can clearly find the sample
            results and tests that they need.
          </p>
          <p>
            Currently, I&apos;m a developer for the Purdue club known as{' '}
            <a
              className="link"
              href="https://pros.cs.purdue.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PROS
            </a>
            , where we build and maintain a kernel for VEX&apos;s V5 robot brain that&apos;s used by
            teams around the world in robotics competitions.
          </p>
        </Section>

        {/* Hobbies Section */}
        <Section title="Hobbies" className="mt-12">
          <p>
            When I get a break from my studies, I usually spend time playing games with friends or
            running outside to snap some photos. I was brought up around video games, and so ever
            since I was young they&apos;ve been a fun way to stay connected to both friends and family.
            As for photography, I picked it up just over a year ago, and it&apos;s served as a way to
            capture memories. I primarily focus on landscape and street photography, and have a
            particular love for film. You can find my Instagram account where I post some of my photos{' '}
            <a
              className="link"
              href="https://www.instagram.com/sprock_shoots_film"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            {' '}if you&apos;re interested.
          </p>
        </Section>

        {/* Blog/Projects Section */}
        <Section title="Blog & Projects" className="mt-12">
          <p className="mb-4">
            I occasionally write about my projects and experiments with code.
          </p>

          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-text-link hover:text-text-link-hover text-lg font-medium group"
          >
            View Blog
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </Section>
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
