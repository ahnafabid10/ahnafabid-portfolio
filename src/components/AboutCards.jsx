/**
 * AboutCards Component
 * --------------------
 * A 3-column grid of cards that describe who Ahnaf is:
 *   1. The Journey  — origin story
 *   2. The Work     — professional approach
 *   3. The Human    — life outside code
 *
 * Each card has:
 *   - An icon in a rounded box (highlights blue on hover)
 *   - A bold title
 *   - A short paragraph
 *
 * To add/edit cards → update the CARDS array below.
 */

import { Compass, Layers, Gamepad2 } from 'lucide-react'

const CARDS = [
  {
    Icon: Compass,
    title: 'The Journey',
    text: 'I started coding by hacking apart HTML templates and fell in love with the instant feedback loop of web development. From those early static sites to complex SPAs, my drive has always been curiosity and the joy of creation.',
  },
  {
    Icon: Layers,
    title: 'The Work',
    text: 'I enjoy crafting reusable component systems, optimizing performance metrics, and obsessing over micro-interactions. Clean code, semantic HTML, and accessible design are my non-negotiables for any project.',
  },
  {
    Icon: Gamepad2,
    title: 'The Human',
    text: "When I'm not shipping code, you can find me exploring local specialty coffee shops, gaming, or tinkering with smart home automation. I believe a balanced life fuels the best creativity.",
  },
]

export default function AboutCards() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {CARDS.map(({ Icon, title, text }) => (
        <div
          key={title}
          className="bg-[#151921] p-8 rounded-2xl border border-[#2A303C] hover:border-blue-500/50 transition-colors group"
        >
          {/* Icon box — turns blue on card hover */}
          <div className="h-10 w-10 bg-[#0B0E14] rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
            <Icon
              size={20}
              className="text-white group-hover:text-[#2563EB] transition-colors"
            />
          </div>

          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">{text}</p>
        </div>
      ))}
    </section>
  )
}
