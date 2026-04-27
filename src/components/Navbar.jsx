/**
 * Navbar Component
 * ----------------
 * Fixed top navigation bar with:
 * - Brand logo on the left
 * - Nav links in the center/right
 * - "Contact Me" CTA button
 * - Glassmorphism background (backdrop-blur + semi-transparent)
 */

const NAV_LINKS = [
  { label: 'Home',      href: '#' },
  { label: 'About',     href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#0B0E14]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Brand */}
          <div className="flex items-center space-x-2">
            <span className="text-[#2563EB] font-bold text-xl">&lt;/&gt;</span>
            <span className="font-bold text-xl tracking-tight">Ahnaf Abid</span>
          </div>

          {/* Desktop nav links + CTA */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium hover:text-[#2563EB] transition-colors"
              >
                {label}
              </a>
            ))}
            <a href="#contact" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-lg shadow-blue-500/20">
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </nav>
  )
}
