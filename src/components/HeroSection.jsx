/**
 * HeroSection Component
 * ----------------------
 * The main "About" hero split into two columns:
 *   Left  → availability badge, heading, bio, action buttons, social links
 *   Right → profile photo with gradient glow effect
 *
 * Props: none (static content)
 */

import { Download, FolderOpen, GitFork, Globe, Mail } from 'lucide-react'

// Social link data — add/remove entries here to update the row
const SOCIAL_LINKS = [
  { Icon: GitFork, label: 'GitHub',   href: '#' },
  { Icon: Globe,   label: 'LinkedIn', href: '#' },
  { Icon: Mail,    label: 'Email',    href: '#' },
]

export default function HeroSection() {
  return (
    <section
      id="about"
      className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
    >
      {/* ── Left column ── */}
      <div className="space-y-8 order-2 lg:order-1">

        {/* Availability badge with animated ping dot */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
          </span>
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
            Available for new opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          About Ahnaf <br />
          <span className="text-white">Abid</span>
        </h1>

        {/* Short bio */}
        <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-xl">
          Senior Frontend Engineer &amp; UI Enthusiast. I specialize in building
          accessible, pixel-perfect interfaces that blend engineering precision
          with artistic flair.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center space-x-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25">
            <Download size={16} />
            <span>Download Resume</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium border border-[#2A303C] hover:bg-[#151921] transition-all">
            <FolderOpen size={16} />
            <span>View Projects</span>
          </button>
        </div>

        {/* Social links row */}
        <div className="flex items-center space-x-4 pt-4">
          <span className="text-sm text-[#9CA3AF]">Follow me:</span>
          <div className="flex space-x-3">
            {SOCIAL_LINKS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-10 w-10 rounded-full bg-[#151921] border border-[#2A303C] flex items-center justify-center text-gray-400 hover:text-[#2563EB] hover:border-[#2563EB] transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right column — profile photo ── */}
      <div className="relative order-1 lg:order-2 group">
        {/* Gradient glow ring behind the image */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

        {/* Photo container */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#2A303C] shadow-2xl glow-effect bg-[#151921]">
          <img
            alt="Portrait of Ahnaf Abid"
            className="object-cover w-full h-full transform transition hover:scale-105 duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEEcD012cSqkeLLlG7Yzr2t1Hilcus66AATR9PvXxu0u-gv2fFV8ZXgoiq-EbALuR7d1e09D-qN9VkkGQW3EJUNHkKOkBlpF2k-aB32es0AauseSOXjEbiGowMUkD45eiIqSLoWm-4LzE8jS5LQ5WwcwNVRnWlxBI-RsbV9lJUhXgH44dF3Un1x_G_4aaadqo9pBGTcK4TFABPokAOmYx4fO7PchHlM1JprU-27fr_zgHOtQNu8swEGvzLJp9wgjMPbDXtAXWt4Ik"
          />
        </div>
      </div>
    </section>
  )
}
