import { motion } from 'framer-motion'
import { stagger, scaleIn } from '../hooks/useScrollReveal'

const BIO = `I'm Abid — a MERN Stack Developer with hands-on experience building responsive and scalable web applications using MongoDB, Express.js, React.js and Node.js. Strong problem-solving skills with a focus on writing clean, efficient and maintainable code. Passionate about learning modern web technologies and delivering user-focused solutions.`

export default function AboutCards() {
  return (
    <section id="about-me" className="flex flex-col gap-8">

      {/* Section heading */}
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <div className="h-px bg-gray-800 flex-grow" />
        <h2 className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase whitespace-nowrap">About Me</h2>
        <div className="h-px bg-gray-800 flex-grow" />
      </motion.div>

      {/* Bio */}
      <motion.p
        className="text-[#9CA3AF] text-base lg:text-lg leading-relaxed max-w-3xl"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        {BIO}
      </motion.p>

      {/* Tech grid */}
      <motion.div
        variants={stagger} initial="hidden" whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3
          variants={scaleIn}
          className="text-white font-bold text-lg mb-4"
        >
          Technologies
        </motion.h3>
        <motion.div className="flex flex-wrap gap-3" variants={stagger}>
          {TECHS.map(tech => (
            <motion.span
              key={tech}
              variants={scaleIn}
              whileHover={{ scale: 1.08, borderColor: 'rgba(255,255,255,0.4)' }}
              className="px-3 py-1.5 bg-[#151921] border border-[#2A303C] rounded-lg text-sm text-white font-mono cursor-default transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

const TECHS = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'React Router',
  'Tailwind CSS', 'Next.js', 'TypeScript', 'Node.js', 'Express.js',
  'MongoDB', 'Firebase', 'JWT', 'Stripe', 'Netlify', 'Vercel',
  'Git', 'Figma',
]
