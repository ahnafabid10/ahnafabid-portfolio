import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Download, Eye } from 'lucide-react'

// Brand SVG icons for social links
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)
const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const SOCIAL_LINKS = [
  { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahnafabid10/' },
  { Icon: GitHubIcon,   label: 'GitHub',   href: 'https://github.com/ahnafabid10' },
  { Icon: TwitterIcon,  label: 'Twitter',  href: 'https://x.com/ahnafabid03' },
  { Icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/ahnafabid04' },
]

const ROLES = ['MERN Stack Developer', 'Problem Solver', 'Programmer']

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)
  const [paused, setPaused]       = useState(false)

  useEffect(() => {
    const full = ROLES[roleIndex]
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true) }, 1800)
      return () => clearTimeout(t)
    }
    if (!deleting) {
      if (displayed.length < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 75)
        return () => clearTimeout(t)
      }
      setPaused(true)
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
        return () => clearTimeout(t)
      }
      setDeleting(false)
      setRoleIndex(i => (i + 1) % ROLES.length)
    }
  }, [displayed, deleting, paused, roleIndex])

  return (
    <span className="inline-flex items-baseline">
      <span className="text-[#9CA3AF] font-normal">I'm a&nbsp;</span>
      <span className="text-white font-bold">{displayed}</span>
      <span className="inline-block w-[3px] h-[1.1em] bg-white ml-0.5 align-middle animate-blink" />
    </span>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function HeroSection() {
  const imgRef = useRef(null)

  useEffect(() => {
    if (!imgRef.current) return
    gsap.to(imgRef.current, {
      y: -14, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1,
    })
  }, [])

  return (
    <section id="about" className="grid lg:grid-cols-2 gap-12  items-center">

      {/* ── Left ── */}
      <motion.div
        className="space-y-6 order-2 lg:order-1"
        variants={container} initial="hidden" animate="show"
      >
        {/* Badge */}
        <motion.div variants={item}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item}
          className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
          Hi, I'm Ahnaf<br />Abid
        </motion.h1>

        {/* Typewriter */}
        <motion.p variants={item} className="text-xl lg:text-2xl min-h-[2rem]">
          <Typewriter />
        </motion.p>

        {/* Bio */}
        <motion.p variants={item} className="text-[#9CA3AF] text-base lg:text-lg leading-relaxed max-w-xl">
          Passionate about creating innovative web solutions with modern technologies.
          I specialize in building scalable applications and solving complex problems
          through clean, efficient code.
        </motion.p>

        {/* Buttons — matching screenshot style */}
        <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
          <motion.a
            href="/Ahnaf Abid Resume.pdf" download
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <Download size={16} /> Download Resume
          </motion.a>
          <motion.a
            href="/Ahnaf Abid Resume.pdf" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition-all"
          >
            <Eye size={16} /> View Resume
          </motion.a>
        </motion.div>

        {/* Social links — circular icon buttons matching screenshot */}
        <motion.div variants={item} className="flex items-center space-x-4 pt-2">
          <span className="text-sm text-[#9CA3AF]">Follow me:</span>
          <div className="flex space-x-3">
            {SOCIAL_LINKS.map(({ Icon, label, href }) => (
              <motion.a
                key={label} href={href} aria-label={label}
                target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                className="h-10 w-10 rounded-full bg-[#1a1a1a] border border-[#2A303C] flex items-center justify-center text-white hover:border-white transition-all"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Right — real photo ── */}
      <motion.div
        className="relative order-1 lg:order-2"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div ref={imgRef}>
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-gray-500/10 rounded-2xl blur opacity-40" />
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#2A303C] shadow-2xl bg-[#151921]">
            <img
              alt="Ahnaf Abid"
              className="object-cover object-top w-full h-full transition-all duration-700 grayscale hover:grayscale-0 hover:scale-105"
              src="/Ahnaf Abid.jpg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
