import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react'
import { stagger, fadeUp } from '../hooks/useScrollReveal'

const DEGREES = [
  {
    period: '2023 – Present',
    gpa: 'Ongoing',
    degree: 'B.Sc. in Mathematics',
    institution: 'National University',
    Icon: GraduationCap,
    badgeClass: 'bg-white/10 text-white border border-white/20',
    highlights: [
      'Currently pursuing undergraduate degree in Mathematics',
      'Building strong analytical and problem-solving foundations',
      'Parallel self-study in full-stack web development',
    ],
  },
  {
    period: '2020 – 2022',
    gpa: 'Completed',
    degree: 'Higher Secondary Certificate',
    institution: 'Shahid Syed Nazrul Islam College',
    Icon: BookOpen,
    badgeClass: 'bg-gray-800 text-gray-300 border border-gray-700',
    highlights: [
      'Science group — Physics, Chemistry, Mathematics',
      'Developed strong logical reasoning skills',
      'Began self-learning web development during this period',
    ],
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="relative">
      <motion.div
        className="flex items-center space-x-4 mb-10"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <div className="h-px bg-gray-800 flex-grow" />
        <h2 className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase">Education</h2>
        <div className="h-px bg-gray-800 flex-grow" />
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={stagger} initial="hidden" whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {DEGREES.map(({ period, gpa, degree, institution, Icon, badgeClass, highlights }) => (
          <motion.div
            key={degree}
            variants={fadeUp}
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.2)' }}
            className="relative bg-[#151921] p-8 rounded-2xl border border-[#2A303C] overflow-hidden group transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Icon size={120} className="text-white transform rotate-12 translate-x-4 -translate-y-4" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>{period}</span>
                <span className="text-sm text-[#9CA3AF] font-medium">{gpa}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{degree}</h3>
              <p className="text-gray-400 font-medium mb-6">{institution}</p>
              <ul className="space-y-3 mt-auto">
                {highlights.map(item => (
                  <li key={item} className="flex items-start space-x-3 text-sm text-[#9CA3AF]">
                    <CheckCircle size={16} className="text-white mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
