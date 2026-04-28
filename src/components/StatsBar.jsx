import { motion } from 'framer-motion'
import { Clock, FolderOpen, Coffee } from 'lucide-react'
import { stagger, fadeUp } from '../hooks/useScrollReveal'

const STATS = [
  { Icon: Clock,      value: '1+',       label: 'Year Experience'  },
  { Icon: FolderOpen, value: '4+',       label: 'Projects Shipped' },
  { Icon: Coffee,     value: 'Infinite', label: 'Coffee Consumed'  },
]

export default function StatsBar() {
  return (
    <motion.div
      className="grid grid-cols-3 gap-0 border border-[#2A303C] rounded-2xl overflow-hidden"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {STATS.map(({ Icon, value, label }, i) => (
        <motion.div
          key={label}
          variants={fadeUp}
          className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 p-6 sm:p-8
            ${i > 0 ? 'border-l border-[#2A303C]' : ''}`}
        >
          {/* Icon */}
          <div className="text-white shrink-0">
            <Icon size={32} />
          </div>

          {/* Text */}
          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-black text-white leading-none">{value}</h3>
            <p className="text-[10px] sm:text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mt-1.5">
              {label}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
