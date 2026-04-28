import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Copy, Check, ArrowRight, ExternalLink, Share2, MapPin, Clock } from 'lucide-react'
import { stagger, fadeUp, scaleIn } from '../hooks/useScrollReveal'

const CONTACT_CARDS = [
  { id: 'email',    Icon: Mail,          label: 'Email',    value: 'ahnafabid600@gmail.com', href: 'mailto:ahnafabid600@gmail.com', cta: 'Send Message', ctaIcon: ArrowRight   },
  { id: 'phone',    Icon: Phone,         label: 'Phone',    value: '+880 1326 585958',        href: 'tel:+8801326585958',            cta: null,           ctaIcon: null         },
  { id: 'whatsapp', Icon: MessageCircle, label: 'WhatsApp', value: '+880 1326 585958',        href: 'https://wa.me/8801326585958',   cta: 'Chat Now',     ctaIcon: ExternalLink },
]

const LinkedInIcon  = () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const GitHubIcon    = () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
const TwitterIcon   = () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
const DribbbleIcon  = () => <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.932-4.02 4.392-6.87zM12 22.02c-.06 0-.12-.002-.18-.003-1.082-.01-5.185-.14-7.538-4.17 2.957-.83 6.31-1.076 7.82.016.326.236.63.5.908.788-.583 2.502-1 3.37-1.01 3.37zm-5.75-2.067c2.327 3.197 5.253 2.768 6.084 2.525-.664-.997-1.066-2.022-1.32-2.912-.19-.655-.343-1.286-.46-1.87-2.673-1.823-5.83-2.028-6.61-2.05-.008.267-.015.534-.015.803 0 1.25.29 2.43.805 3.486.27-.47.88-1.577 1.516-2.096.223.18.463.344.717.493z"/></svg>

const SOCIALS = [
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ahnafabid10/' },
  { label: 'GitHub',   Icon: GitHubIcon,   href: 'https://github.com/ahnafabid10'           },
  { label: 'Twitter',  Icon: TwitterIcon,  href: 'https://x.com/ahnafabid03'                },
  { label: 'Dribbble', Icon: DribbbleIcon, href: 'https://www.facebook.com/ahnafabid04'     },
]

function ContactCard({ card }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => { navigator.clipboard.writeText(card.value); setCopied(true); setTimeout(() => setCopied(false), 2000) }
  const CopyIcon = copied ? Check : Copy
  const CtaIcon  = card.ctaIcon

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.25)' }}
      className="group relative flex flex-col gap-3 rounded-xl border border-[#2A303C] bg-[#151921] p-5 transition-colors duration-300"
    >
      <button onClick={handleCopy} aria-label={`Copy ${card.label}`}
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-500 hover:text-white">
        <CopyIcon size={18} className={copied ? 'text-gray-300' : ''} />
      </button>
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white">
          <card.Icon size={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">{card.label}</span>
          {card.href
            ? <a href={card.href} className="text-base font-medium text-white hover:text-gray-300 transition-colors font-mono">{card.value}</a>
            : <span className="text-base font-medium text-white font-mono">{card.value}</span>
          }
        </div>
      </div>
      {card.cta && card.href && (
        <div className="mt-1">
          <a href={card.href} className="inline-flex items-center gap-1 text-sm font-bold text-gray-300 hover:text-white hover:underline">
            {card.cta} <CtaIcon size={14} />
          </a>
        </div>
      )}
    </motion.div>
  )
}

function SocialCard({ social }) {
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      variants={scaleIn}
      whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.3)' }}
      className="group flex items-center gap-3 rounded-lg border border-[#2A303C] bg-[#151921] p-4 transition-colors"
    >
      <div className="rounded-full bg-[#2A303C] p-2 group-hover:bg-white group-hover:text-black transition-colors text-white">
        <social.Icon />
      </div>
      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{social.label}</span>
    </motion.a>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-12">
      <motion.div
        className="flex flex-col items-center text-center gap-4"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-4 w-full">
          <div className="h-px bg-gray-800 flex-grow" />
          <h2 className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase whitespace-nowrap">Get In Touch</h2>
          <div className="h-px bg-gray-800 flex-grow" />
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          Available for new opportunities
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white pb-1">Let's Connect</h3>
        <p className="text-base md:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
          Interested in working together? Whether you have a question about my stack, want to discuss a project, or just want to say hi — my inbox is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Left */}
        <motion.div className="flex flex-col gap-6" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <Mail size={20} className="text-gray-400" /> Contact Details
            </h4>
            <p className="text-[#9CA3AF] text-sm">Direct channels to reach me for professional inquiries.</p>
          </motion.div>
          {CONTACT_CARDS.map(card => <ContactCard key={card.id} card={card} />)}
        </motion.div>

        {/* Right */}
        <motion.div className="flex flex-col gap-6" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <Share2 size={20} className="text-gray-400" /> Social Profiles
            </h4>
            <p className="text-[#9CA3AF] text-sm">Find me on these platforms.</p>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {SOCIALS.map(s => <SocialCard key={s.label} social={s} />)}
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-auto relative rounded-xl overflow-hidden h-40 bg-[#151921] border border-[#2A303C] flex items-center justify-center p-6 text-center"
          >
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            <div className="relative z-10">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-1"><MapPin size={14} /> Based in</p>
              <h5 className="text-xl font-bold text-white mt-1">Toronto, Canada</h5>
              <div className="mt-2 text-gray-400 text-xs flex items-center justify-center gap-1">
                <Clock size={13} /><span>UTC-5 (EST)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
