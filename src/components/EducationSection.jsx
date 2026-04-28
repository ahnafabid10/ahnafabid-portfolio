import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react'
import { stagger, fadeUp } from '../hooks/useScrollReveal'

const DEGREES = [
  {
    period: '2023 – Present',
    status: 'Ongoing',
    degree: 'B.Sc. in Mathematics',
    institution: 'National University',
    Icon: GraduationCap,
    badgeClass: 'bg-white/10 text-white border border-white/20',
  },
  {
    period: '2020 – 2022',
    status: 'Completed',
    degree: 'Higher Secondary Certificate',
    institution: 'Shahid Syed Nazrul Islam College',
    Icon: BookOpen,
    badgeClass: 'bg-gray-800 text-gray-300 border border-gray-700',
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="relative">

      {/* Heading */}
      <motion.div
        className="flex items-center space-x-4 mb-10"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <div className="h-px bg-gray-800 flex-grow" />
        <h2 className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase">Education</h2>
        <div className="h-px bg-gray-800 flex-grow" />
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={stagger} initial="hidden" whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {DEGREES.map(({ period, status, degree, institution, Icon, badgeClass }) => (
          <motion.div
            key={degree}
            variants={fadeUp}
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.2)' }}
            className="relative bg-[#151921] p-8 rounded-2xl border border-[#2A303C] overflow-hidden group transition-all duration-300"
          >
            {/* Watermark icon */}
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Icon size={120} className="text-white transform rotate-12 translate-x-4 -translate-y-4" />
            </div>

            <div className="relative z-10 flex flex-col gap-3">

              {/* Period badge + status */}
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
                  <Calendar size={11} />
                  {period}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9CA3AF]">
                  <Award size={12} />
                  {status}
                </span>
              </div>

              {/* Degree */}
              <h3 className="text-2xl font-bold text-white">{degree}</h3>

              {/* Institution */}
              <p className="text-gray-400 font-medium">{institution}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
