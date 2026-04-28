import { Code2, Braces, FileCode2, Cpu, Wind, Triangle, GitBranch } from 'lucide-react'

const TECHS = [
  { Icon: Code2,     label: 'HTML5'      },
  { Icon: Braces,    label: 'CSS3'       },
  { Icon: FileCode2, label: 'JavaScript' },
  { Icon: Cpu,       label: 'React'      },
  { Icon: Code2,     label: 'TypeScript' },
  { Icon: Wind,      label: 'Tailwind'   },
  { Icon: Triangle,  label: 'Next.js'    },
  { Icon: GitBranch, label: 'GraphQL'    },
]

export default function TechStack() {
  return (
    <div className="relative py-8">
      <div className="flex items-center space-x-4 mb-8 justify-center">
        <div className="h-px bg-gray-800 w-16 md:w-32" />
        <h2 className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase text-center">
          Technologies I Work With
        </h2>
        <div className="h-px bg-gray-800 w-16 md:w-32" />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {TECHS.map(({ Icon, label }) => (
          <span
            key={label}
            className="px-4 py-2 bg-[#151921] rounded border border-[#2A303C] text-sm font-medium flex items-center gap-2 text-white hover:border-white/40 transition-colors"
          >
            <Icon size={16} />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
