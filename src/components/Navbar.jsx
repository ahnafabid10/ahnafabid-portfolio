import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home',      href: '#' },
  { label: 'About',     href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-300
        ${scrolled ? 'bg-black/90 border-white/10' : 'bg-transparent border-transparent'}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Brand */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.04 }}
          >
            <span className="text-white font-black text-xl">&lt;/&gt;</span>
            <span className="font-bold text-xl tracking-tight text-white">Ahnaf Abid</span>
          </motion.div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              className="bg-white hover:bg-gray-200 text-black px-5 py-2.5 rounded-lg font-medium text-sm transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
