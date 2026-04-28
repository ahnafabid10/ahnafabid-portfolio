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
          className="bg-[#151921] p-8 rounded-2xl border border-[#2A303C] hover:border-white/40 transition-colors group"
        >
          <div className="h-10 w-10 bg-[#0B0E14] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
            <Icon size={20} className="text-white" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">{text}</p>
        </div>
      ))}
    </section>
  )
}
