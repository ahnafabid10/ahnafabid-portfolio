import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, FolderOpen, Coffee } from 'lucide-react'
import { stagger, fadeUp } from '../hooks/useScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { Icon: Code2,       value: '4+',       label: 'Projects Shipped'   },
  { Icon: FolderOpen,  value: 'MERN',     label: 'Core Stack'         },
  { Icon: Coffee,      value: 'Infinite', label: 'Coffee Consumed'    },
]

export default function StatsBar() {
  const lineRef = useRef(null)

  useEffect(() => {
    if (!lineRef.current) return
    gsap.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: lineRef.current, start: 'top 85%' } }
    )
  }, [])

  return (
    <div className="border-y border-gray-800 py-12 overflow-hidden">
      <div ref={lineRef} className="h-px bg-white/5 mb-12" />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={stagger} initial="hidden" whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {STATS.map(({ Icon, value, label }, i) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className={`flex items-start space-x-4 ${i > 0 ? 'md:border-l border-gray-800 md:pl-8' : ''}`}
          >
            <div className="text-white mt-1"><Icon size={36} /></div>
            <div>
              <h3 className="text-4xl font-bold text-white">{value}</h3>
              <p className="text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mt-1">{label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
