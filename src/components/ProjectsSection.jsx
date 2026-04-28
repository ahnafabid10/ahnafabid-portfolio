import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Rocket, Code2, Info, X, ExternalLink } from 'lucide-react'
import { stagger, fadeUp, scaleIn } from '../hooks/useScrollReveal'

const PROJECTS = [
  {
    title: 'CareerPilot',
    subtitle: 'AI Learning Roadmap Generator — Team Project',
    tag: 'Next.js + AI',
    tagColor: 'text-white bg-white/10 border border-white/20',
    cardImage: '/carrerpilot.png',
    detailImage: '/carrerpilot.png',
    description: 'An AI-powered full-stack web application that helps users plan, prepare, and track their career journey with personalized guidance and intelligent tools.',
    stack: ['Next.js', 'TypeScript', 'Axios', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Schedule X'],
    liveUrl: 'https://careerpilotasync.vercel.app/',
    repoUrl: 'https://github.com/alvy00/eg-careerpilot-asyncawait',
    bullets: [
      'Creates personalized learning paths with milestones, resources, and progress tracking',
      'Developed AI Interview and Mentor features to simulate real interviews and provide instant feedback',
      'Integrated productivity tools: study planner, interview question bank, and quiz system',
    ],
  },
  {
    title: 'Digital Life Lessons',
    subtitle: 'A Digital Platform for Life Lessons & Growth',
    tag: 'MERN Stack',
    tagColor: 'text-white bg-white/10 border border-white/20',
    cardImage: '/digital Life lession.png',
    detailImage: '/digital Life lession.png',
    description: 'A full-stack MERN application that allows users to create, share, and explore meaningful life lessons with role-based access control and premium content monetization.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth', 'Stripe', 'Axios', 'Recharts'],
    liveUrl: 'https://digital-life-lesson11.netlify.app/',
    repoUrl: 'https://github.com/ahnafabid10/digital-life-lessons-client-side',
    bullets: [
      'Built a scalable MERN platform with Firebase authentication, protected routes, and role-based access control',
      'Implemented Stripe payment integration with Free and Premium plans, including locked premium content',
      'Developed lesson creation, likes, comments, favorites, search, filter, pagination, and admin dashboard',
    ],
  },
  {
    title: 'TravelEase',
    subtitle: 'Smart Vehicle Booking & Trip Management Platform',
    tag: 'MERN Stack',
    tagColor: 'text-white bg-white/10 border border-white/20',
    cardImage: '/travelease.png',
    detailImage: '/travelease.png',
    description: 'A full-stack MERN web application for vehicle booking and trip management, allowing users to explore, manage, and book vehicles with secure authentication and dynamic listings.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth', 'Axios', 'React Router'],
    liveUrl: 'https://traveleaseb12a10.netlify.app/',
    repoUrl: 'https://github.com/ahnafabid10/TravelEase-client-side',
    bullets: [
      'Built a MERN platform with Firebase authentication, protected routes, and user-specific vehicle management',
      'Implemented dynamic vehicle listings with CRUD operations, booking management, and real-time updates',
      'Developed search, filter, sorting, dark/light theme toggle, and responsive modern UI',
    ],
  },
  {
    title: 'GreenNest',
    subtitle: 'Indoor Plant Care & Consultation Platform',
    tag: 'React + Firebase',
    tagColor: 'text-white bg-white/10 border border-white/20',
    cardImage: '/greennest.png',
    detailImage: '/greennest.png',
    description: 'Allows users to browse indoor plants, read care guides, book expert consultations, and manage personal profiles with secure Firebase authentication.',
    stack: ['React.js', 'React Router', 'Tailwind CSS', 'DaisyUI', 'Framer Motion', 'Swiper.js', 'Firebase Auth'],
    liveUrl: 'https://greennesta9.netlify.app/',
    repoUrl: 'https://github.com/ahnafabid10/GreenNest',
    bullets: [
      'Secure Firebase Authentication (Email/Password + Google Login) with protected routes',
      'Dynamic plant display from JSON data with Book Consultation form and real-time profile updates',
      'Swiper.js slider, Framer Motion animations, Plant of the Week, Best Sellers sections',
    ],
  },
]

// ── ProjectCard ───────────────────────────────────────────────────────────────

function ProjectCard({ project, index, isSelected, onSelect }) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(isSelected ? null : index)}
      className={`group relative flex flex-col bg-[#151921] rounded-2xl overflow-hidden border transition-colors duration-300 cursor-pointer
        ${isSelected ? 'border-white shadow-[0_0_30px_rgba(255,255,255,0.08)]' : 'border-gray-800 hover:border-white/30'}`}
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#151921]/90 to-transparent z-10" />
        <img src={project.cardImage} alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105" />
      </div>
      <div className="flex flex-col flex-1 p-6 gap-4 z-20">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">{project.title}</h3>
          <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-2">{project.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className={`text-xs font-mono px-2 py-1 rounded ${project.tagColor}`}>{project.tag}</span>
          <button className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
            {isSelected ? 'Close' : 'View Details'}
            <ArrowRight size={16} className={`transition-transform duration-300 ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

// ── DetailPanel ───────────────────────────────────────────────────────────────

function DetailPanel({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#151921] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row"
    >
      {/* Left */}
      <div className="w-full lg:w-5/12 bg-[#0f1419] p-6 lg:p-8 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-gray-800">
        <div className="rounded-xl overflow-hidden border border-gray-700 aspect-video relative group/img">
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity z-10">
            <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">View Full Res</span>
          </div>
          <img src={project.detailImage} alt={`${project.title} screenshot`}
            className="w-full h-full object-cover transition-all duration-500 grayscale hover:grayscale-0" />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white text-xs uppercase tracking-wider font-bold opacity-60">Key Actions</h3>
          <div className="flex flex-wrap gap-3">
            <motion.a href={project.liveUrl} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black py-3 px-4 rounded-lg font-medium transition-colors min-w-[140px]">
              <Rocket size={18} /> Live Demo
            </motion.a>
            <motion.a href={project.repoUrl} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg font-medium transition-colors min-w-[140px]">
              <Code2 size={18} /> GitHub Repo
            </motion.a>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-col gap-3 mt-auto">
          <h3 className="text-white text-xs uppercase tracking-wider font-bold opacity-60">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span key={tech} className="px-3 py-1 rounded-md bg-white/10 text-white text-xs font-mono border border-white/20">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-7/12 p-6 lg:p-10 flex flex-col gap-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
            <p className="text-gray-400 text-base font-medium">{project.subtitle}</p>
          </div>
          <motion.button onClick={onClose} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
            <X size={20} />
          </motion.button>
        </div>

        {/* Overview */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
              <Info size={16} />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Overview</h4>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">{project.description}</p>
          </div>
        </div>

        {/* Bullet highlights */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300">
              <ExternalLink size={16} />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Key Highlights</h4>
            <ul className="space-y-2">
              {project.bullets.map(b => (
                <li key={b} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null)

  const handleSelect = (index) => {
    setSelected(index)
    if (index !== null) {
      setTimeout(() => document.getElementById('project-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    }
  }

  return (
    <section id="projects" className="flex flex-col gap-12">
      <motion.div
        className="flex flex-col items-center text-center gap-4"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-4 w-full">
          <div className="h-px bg-gray-800 flex-grow" />
          <h2 className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase whitespace-nowrap">Selected Works</h2>
          <div className="h-px bg-gray-800 flex-grow" />
        </div>
        <p className="text-[#9CA3AF] text-lg font-normal max-w-2xl leading-relaxed">
          Real-world projects built with the MERN stack and modern web technologies.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={stagger} initial="hidden" whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} isSelected={selected === i} onSelect={handleSelect} />
        ))}
      </motion.div>

      <AnimatePresence>
        {selected !== null && (
          <div id="project-detail">
            <DetailPanel project={PROJECTS[selected]} onClose={() => setSelected(null)} />
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
