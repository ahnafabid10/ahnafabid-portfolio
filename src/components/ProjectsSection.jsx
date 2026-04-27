/**
 * ProjectsSection Component
 * --------------------------
 * Two-part layout:
 *   1. Card grid  — 3 project cards, click one to open the detail panel
 *   2. Detail panel — left: image + links + stack, right: overview / challenges / improvements
 *
 * State:
 *   selectedProject — index of the currently expanded project (null = none)
 *
 * To add/edit projects → update the PROJECTS array below.
 */

import { useState } from 'react'
import {
  ArrowRight,
  Rocket,
  Code2,
  Info,
  AlertTriangle,
  TrendingUp,
  X,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: 'Nexus E-Commerce',
    subtitle: 'Headless Commerce Dashboard',
    tag: 'Next.js',
    tagColor: 'text-blue-400 bg-blue-500/10 border border-blue-500/20',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9kllg2U_bldFO3Hi3yLUOxtNbSDc_SuWoF-sLk-glsxzI3UX4cHu0BNF6nyMo4EQ4Mj0oAAzWMddmDPSBVvwELNlsu-9IWdnuKNn_TgtJj72n0ZaWMwRhgdDlkOVD2bJj4xKrqKMossFGFeEVs-FBz316fmEhb4ErMJJQeLj_OZTKZbKST8e_uG1aKrla-_gkokqKNUy0gdJu4ZMh4b--C1nCTGMv-S55UFQFVlU33OpHHtZzZbJQDu1mYoEk3KuxyyotzOhn0mo',
    detailImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5GKaFwQZ1NUt1uI1dE5td0LTFNBl6VxFT9cuyvrfmaUbxvStexh_RGOrHSR9cllCufyJVu5p4mFT5YJ8TMNnslPJd1iIf4WhwgQWjJFMUlxX7-T3R6ViVXiF9UVBjTsyXLYrnKjjeEbOPS3U6u9bNqmjvbr_3BpZ-zBS_iiZ6PNc7qlSI48TPRXeoS2_dtUezG_xwENCtbb_qJor_yeW3MzZePVNuj3o_ebvPEj124mvagSEm9_ERLrn3qP_rX7CYHrbNhOhdhBI',
    description:
      'A high-performance headless commerce dashboard managing over 50k SKUs with real-time inventory tracking.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
    overview:
      'A comprehensive dashboard solution designed for high-volume retailers. The goal was to decouple the frontend from the backend logic, allowing marketing teams to update content without developer intervention while maintaining sub-second page loads.',
    challenges:
      'Handling the state management for 50k+ products was causing browser lag. I implemented virtual scrolling and optimistic UI updates using React Query to ensure the interface remained responsive even during heavy data fetching operations.',
    improvements:
      'Plan to integrate AI-driven sales forecasting using TensorFlow.js directly in the browser and add WebSocket support for collaborative inventory editing among multiple warehouse managers.',
  },
  {
    title: 'Vault FinTech App',
    subtitle: 'Mobile Banking Experience',
    tag: 'React Native',
    tagColor: 'text-green-400 bg-green-500/10 border border-green-500/20',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBU3OEGrno2503OVpuryT7QFpH61W7nd5b9FFhlGJpc1I-YtK9AjCjZFV1AMaoWgAl-bi8OQZ0xkILrlihXb_cHTRwm2BT1i8eqF7xaisinrazl8rx4_lkJj841Fm9euAMEs6uVz-jcpGy0Ccp4XjL_tf0LzPLaWQIeBcnaUB5b70lGEs9BVWRx9FqZ_rt1wis7j90hKzhBuaO9GoCX9YFIae8VSQ0DjzFwnpO2zqr5mZvIxjzK_ijGUs_hXjybbwVnHgUfhQqqrZo',
    detailImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBU3OEGrno2503OVpuryT7QFpH61W7nd5b9FFhlGJpc1I-YtK9AjCjZFV1AMaoWgAl-bi8OQZ0xkILrlihXb_cHTRwm2BT1i8eqF7xaisinrazl8rx4_lkJj841Fm9euAMEs6uVz-jcpGy0Ccp4XjL_tf0LzPLaWQIeBcnaUB5b70lGEs9BVWRx9FqZ_rt1wis7j90hKzhBuaO9GoCX9YFIae8VSQ0DjzFwnpO2zqr5mZvIxjzK_ijGUs_hXjybbwVnHgUfhQqqrZo',
    description:
      'Secure mobile banking experience with biometric authentication and real-time transaction visualization.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Node.js'],
    liveUrl: '#',
    repoUrl: '#',
    overview:
      'A full-featured mobile banking app built for security-first users. Biometric login, encrypted local storage, and real-time push notifications keep users informed and protected at every step.',
    challenges:
      'Implementing biometric authentication across both iOS and Android with a unified API was tricky. Used expo-local-authentication with a custom fallback PIN flow to ensure 100% device coverage.',
    improvements:
      'Planning to add open-banking API integrations so users can aggregate accounts from multiple banks, and introduce a budgeting AI that learns from spending patterns.',
  },
  {
    title: 'Flow Task Manager',
    subtitle: 'Collaborative SaaS Platform',
    tag: 'Vue.js',
    tagColor: 'text-purple-400 bg-purple-500/10 border border-purple-500/20',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArYzOUIgk6kC5DWIpovqVPQs5uSg0uPwL4IGwlXTqkLAZrgTIvTG7zlD_Oo4jDTb2vGHuadpHlEq827F3g9lpDqQQktaNvYqwsXxN3wgybxHDYTh-wOXjPJTcDNNpYQ8PZksoNYGoipX98N_X5Dgm9-rJBnIFOSD-fKxnloZgTOSW0XqOQgQCSujFHQiO1WqWY4aMLkhIqnMJfiRS0s_V6AjqA3A9anOB5ugH1TxXNMwOVwV3sv6HW8mX2pSImAt38Dnf7avhZVSo',
    detailImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArYzOUIgk6kC5DWIpovqVPQs5uSg0uPwL4IGwlXTqkLAZrgTIvTG7zlD_Oo4jDTb2vGHuadpHlEq827F3g9lpDqQQktaNvYqwsXxN3wgybxHDYTh-wOXjPJTcDNNpYQ8PZksoNYGoipX98N_X5Dgm9-rJBnIFOSD-fKxnloZgTOSW0XqOQgQCSujFHQiO1WqWY4aMLkhIqnMJfiRS0s_V6AjqA3A9anOB5ugH1TxXNMwOVwV3sv6HW8mX2pSImAt38Dnf7avhZVSo',
    description:
      'Collaborative SaaS platform enabling teams to manage workflows with drag-and-drop kanban boards.',
    stack: ['Vue 3', 'Pinia', 'Vite', 'Tailwind CSS', 'Firebase'],
    liveUrl: '#',
    repoUrl: '#',
    overview:
      'A real-time collaborative task manager built for distributed teams. Drag-and-drop kanban boards, role-based permissions, and live presence indicators make async work feel synchronous.',
    challenges:
      'Syncing drag-and-drop state across multiple clients in real time without conflicts required a CRDT-inspired approach using Firebase Realtime Database with optimistic local updates.',
    improvements:
      'Looking to add Gantt chart views, time-tracking integrations with Toggl, and an AI assistant that auto-prioritizes tasks based on deadlines and team velocity.',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * ProjectCard — single card in the grid.
 * Clicking it calls onSelect(index) to open the detail panel.
 */
function ProjectCard({ project, index, isSelected, onSelect }) {
  return (
    <article
      onClick={() => onSelect(isSelected ? null : index)}
      className={`group relative flex flex-col bg-[#151921] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer
        hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]
        ${isSelected
          ? 'border-[#2563EB] shadow-[0_0_20px_rgba(37,99,235,0.2)]'
          : 'border-gray-800 hover:border-[#2563EB]/50'
        }`}
    >
      {/* Card image */}
      <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#151921]/90 to-transparent z-10" />
        <img
          src={project.cardImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-4 z-20">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-white group-hover:text-[#2563EB] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          {/* Tech tag */}
          <span className={`text-xs font-mono px-2 py-1 rounded ${project.tagColor}`}>
            {project.tag}
          </span>

          {/* CTA */}
          <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#2563EB] transition-colors">
            {isSelected ? 'Close' : 'View Details'}
            <ArrowRight
              size={16}
              className={`transition-transform duration-300 ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`}
            />
          </button>
        </div>
      </div>
    </article>
  )
}

/**
 * DetailPanel — expanded view shown below the grid when a card is selected.
 * Left: image + action buttons + tech stack
 * Right: overview / challenges / improvements
 */
function DetailPanel({ project, onClose }) {
  const details = [
    {
      Icon: Info,
      iconBg: 'bg-[#2563EB]/10',
      iconColor: 'text-[#2563EB]',
      label: 'Overview',
      text: project.overview,
    },
    {
      Icon: AlertTriangle,
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-orange-400',
      label: 'Challenges Faced',
      text: project.challenges,
    },
    {
      Icon: TrendingUp,
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-400',
      label: 'Future Improvements',
      text: project.improvements,
    },
  ]

  return (
    <div className="bg-[#151921] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-fade-in">

      {/* ── Left panel ── */}
      <div className="w-full lg:w-5/12 bg-[#0f1419] p-6 lg:p-8 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-gray-800">

        {/* Screenshot */}
        <div className="rounded-xl overflow-hidden border border-gray-700 aspect-video relative group/img">
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity z-10">
            <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">
              View Full Res
            </span>
          </div>
          <img
            src={project.detailImage}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white text-xs uppercase tracking-wider font-bold opacity-60">
            Key Actions
          </h3>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              className="flex-1 flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-3 px-4 rounded-lg font-medium transition-colors min-w-[140px]"
            >
              <Rocket size={18} />
              Live Demo
            </a>
            <a
              href={project.repoUrl}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors min-w-[140px]"
            >
              <Code2 size={18} />
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-col gap-3 mt-auto">
          <h3 className="text-white text-xs uppercase tracking-wider font-bold opacity-60">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="w-full lg:w-7/12 p-6 lg:p-10 flex flex-col gap-8">

        {/* Header row with close button */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
            <p className="text-[#2563EB] text-lg font-medium">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close detail panel"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Detail rows */}
        <div className="space-y-6">
          {details.map(({ Icon, iconBg, iconColor, label, text }) => (
            <div key={label} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className={`w-8 h-8 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
                  <Icon size={16} />
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">{label}</h4>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

/**
 * ProjectsSection
 * Renders the section heading, card grid, and (conditionally) the detail panel.
 */
export default function ProjectsSection() {
  // null = no project selected; number = index of selected project
  const [selected, setSelected] = useState(null)

  const handleSelect = (index) => {
    setSelected(index)
    // Scroll to detail panel after a short delay so it has time to render
    if (index !== null) {
      setTimeout(() => {
        document.getElementById('project-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }

  return (
    <section id="projects" className="flex flex-col gap-12">

      {/* Section heading */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="flex items-center space-x-4 w-full">
          <div className="h-px bg-gray-800 flex-grow" />
          <h2 className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase whitespace-nowrap">
            Selected Works
          </h2>
          <div className="h-px bg-gray-800 flex-grow" />
        </div>
        <p className="text-[#9CA3AF] text-lg font-normal max-w-2xl leading-relaxed">
          A showcase of technical challenges solved through clean code and modern architecture.
        </p>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            isSelected={selected === i}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* Detail panel — only rendered when a project is selected */}
      {selected !== null && (
        <div id="project-detail">
          <DetailPanel
            project={PROJECTS[selected]}
            onClose={() => setSelected(null)}
          />
        </div>
      )}
    </section>
  )
}
