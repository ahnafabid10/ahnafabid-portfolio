import { Download, FolderOpen, GitFork, Globe, Mail } from 'lucide-react'

const SOCIAL_LINKS = [
  { Icon: GitFork, label: 'GitHub',   href: '#' },
  { Icon: Globe,   label: 'LinkedIn', href: '#' },
  { Icon: Mail,    label: 'Email',    href: '#' },
]

export default function HeroSection() {
  return (
    <section id="about" className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* ── Left column ── */}
      <div className="space-y-8 order-2 lg:order-1">

        {/* Availability badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">
            Available for new opportunities
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white">
          About Ahnaf <br />Abid
        </h1>

        {/* Bio */}
        <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-xl">
          Senior Frontend Engineer &amp; UI Enthusiast. I specialize in building
          accessible, pixel-perfect interfaces that blend engineering precision
          with artistic flair.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center space-x-2 bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-lg font-medium transition-all">
            <Download size={16} />
            <span>Download Resume</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium border border-[#2A303C] text-white hover:bg-[#151921] transition-all">
            <FolderOpen size={16} />
            <span>View Projects</span>
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center space-x-4 pt-4">
          <span className="text-sm text-[#9CA3AF]">Follow me:</span>
          <div className="flex space-x-3">
            {SOCIAL_LINKS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-10 w-10 rounded-full bg-[#151921] border border-[#2A303C] flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right column — profile photo ── */}
      <div className="relative order-1 lg:order-2 group">
        {/* Subtle white glow ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-gray-500/10 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />

        {/* Photo */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#2A303C] shadow-2xl glow-effect bg-[#151921]">
          <img
            alt="Portrait of Ahnaf Abid"
            className="object-cover w-full h-full transform transition-all duration-700 grayscale hover:grayscale-0 hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEEcD012cSqkeLLlG7Yzr2t1Hilcus66AATR9PvXxu0u-gv2fFV8ZXgoiq-EbALuR7d1e09D-qN9VkkGQW3EJUNHkKOkBlpF2k-aB32es0AauseSOXjEbiGowMUkD45eiIqSLoWm-4LzE8jS5LQ5WwcwNVRnWlxBI-RsbV9lJUhXgH44dF3Un1x_G_4aaadqo9pBGTcK4TFABPokAOmYx4fO7PchHlM1JprU-27fr_zgHOtQNu8swEGvzLJp9wgjMPbDXtAXWt4Ik"
          />
        </div>
      </div>
    </section>
  )
}
