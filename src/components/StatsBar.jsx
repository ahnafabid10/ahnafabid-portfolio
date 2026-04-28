import { Wrench, Package, Coffee } from 'lucide-react'

const STATS = [
  { Icon: Wrench,  value: '8+',       label: 'Years Experience' },
  { Icon: Package, value: '50+',      label: 'Projects Shipped' },
  { Icon: Coffee,  value: 'Infinite', label: 'Coffee Consumed'  },
]

export default function StatsBar() {
  return (
    <div className="border-y border-gray-800 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STATS.map(({ Icon, value, label }, i) => (
          <div
            key={label}
            className={`flex items-start space-x-4 ${
              i > 0 ? 'border-l-0 md:border-l border-gray-800 md:pl-8' : ''
            }`}
          >
            <div className="text-white mt-1">
              <Icon size={36} />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white">{value}</h3>
              <p className="text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mt-1">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
