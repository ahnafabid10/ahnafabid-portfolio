import { motion } from 'framer-motion'
import { Compass, Layers, Gamepad2 } from 'lucide-react'
import { stagger, scaleIn } from '../hooks/useScrollReveal'

const CARDS = [
  {
    Icon: Compass,
    title: 'The Journey',
    text: 'I started coding by modifying HTML templates and quickly fell in love with building websites. From simple pages to complex web apps, I\'m driven by curiosity and the joy of creating.',
  },
  {
    Icon: Layers,
    title: 'The Work',
    text: 'I enjoy building reusable components, improving website performance, and making small design details perfect. Clean code, clear HTML, and accessible design are important to me.',
  },
  {
    Icon: Gamepad2,
    title: 'The Human',
    text: "When I'm not coding, I like visiting coffee shops, gaming, or working with smart home gadgets. I believe balancing work and life sparks creativity.",
  },
]

export default function AboutCards() {
  return (
    <motion.section
      className="grid md:grid-cols-3 gap-6"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {CARDS.map(({ Icon, title, text }) => (
        <motion.div
          key={title}
          variants={scaleIn}
          whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.15)' }}
          className="bg-[#151921] p-8 rounded-2xl border border-[#2A303C] group cursor-default"
        >
          {/* Icon box */}
          <div className="h-10 w-10 bg-[#0B0E14] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
            <Icon size={20} className="text-white" />
          </div>

          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">{text}</p>
        </motion.div>
      ))}
    </motion.section>
  )
}
