/**
 * EducationSection Component
 * --------------------------
 * Displays academic qualifications in a 2-column card grid.
 *
 * Each card contains:
 *   - A large watermark icon (top-right, fades in on hover)
 *   - Period badge + GPA
 *   - Degree title & institution name
 *   - Bullet list of highlights with CheckCircle icons
 *
 * To add/edit degrees → update the DEGREES array below.
 */

import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react'

const DEGREES = [
  {
    period: '2014 - 2018',
    gpa: 'CGPA: 3.85/4.00',
    degree: 'B.Sc. in Computer Science',
    institution: 'North South University',
    Icon: GraduationCap,
    // Blue badge for the most recent / primary degree
    badgeClass: 'bg-blue-500/10 text-[#2563EB] border border-blue-500/20',
    highlights: [
      'Major in Software Engineering & Information Systems',
      "Vice Chancellor's Gold Medalist for Academic Excellence",
      'Published research paper on Human Computer Interaction',
    ],
  },
  {
    period: '2012 - 2014',
    gpa: 'GPA: 5.00/5.00',
    degree: 'Higher Secondary Certificate',
    institution: 'Dhaka City College',
    Icon: BookOpen,
    // Neutral badge for older/secondary qualification
    badgeClass:
      'bg-gray-800 text-gray-300 border border-gray-700',
    highlights: [
      'Concentration in Science (Physics, Chemistry, Math)',
      'Member of the College Debating Society',
      'Active participant in Science Fair 2013',
    ],
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="relative">

      {/* Section heading with decorative horizontal rules */}
      <div className="flex items-center space-x-4 mb-10">
        <div className="h-px bg-gray-800 flex-grow" />
        <h2 className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase">
          Educational Qualification
        </h2>
        <div className="h-px bg-gray-800 flex-grow" />
      </div>

      {/* Degree cards grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {DEGREES.map(({ period, gpa, degree, institution, Icon, badgeClass, highlights }) => (
          <div
            key={degree}
            className="relative bg-[#151921] p-8 rounded-2xl border border-[#2A303C] overflow-hidden group hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
          >
            {/* Watermark icon — large, faded, rotated in top-right corner */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Icon
                size={120}
                className="text-gray-400 dark:text-gray-600 transform rotate-12 translate-x-4 -translate-y-4"
              />
            </div>

            {/* Card content */}
            <div className="relative z-10 flex flex-col h-full">

              {/* Period badge + GPA row */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
                  {period}
                </span>
                <span className="text-sm text-[#9CA3AF] font-medium">{gpa}</span>
              </div>

              {/* Degree & institution */}
              <h3 className="text-2xl font-bold text-white mb-1">{degree}</h3>
              <p className="text-[#2563EB] font-medium mb-6">{institution}</p>

              {/* Highlights list */}
              <ul className="space-y-3 mt-auto">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start space-x-3 text-sm text-[#9CA3AF]">
                    <CheckCircle size={16} className="text-[#2563EB] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
