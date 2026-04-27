import './index.css'

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#F3F4F6]/80 dark:bg-[#0B0E14]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-[#2563EB] font-bold text-xl">&lt;/&gt;</span>
            <span className="font-bold text-xl tracking-tight">Ahnaf Abid</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-sm font-medium hover:text-[#2563EB] transition-colors" href="#">Home</a>
            <a className="text-sm font-medium hover:text-[#2563EB] transition-colors" href="#about">About</a>
            <a className="text-sm font-medium hover:text-[#2563EB] transition-colors" href="#education">Education</a>
            <a className="text-sm font-medium hover:text-[#2563EB] transition-colors" href="#">Projects</a>
            <a className="text-sm font-medium hover:text-[#2563EB] transition-colors" href="#">Blog</a>
            <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-lg shadow-blue-500/20">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" id="about">
      <div className="space-y-8 order-2 lg:order-1">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
          </span>
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">Available for new opportunities</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          About Ahnaf <br />
          <span className="text-white">Abid</span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-[#9CA3AF] leading-relaxed max-w-xl">
          Senior Frontend Engineer &amp; UI Enthusiast. I specialize in building accessible, pixel-perfect interfaces that blend engineering precision with artistic flair.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="flex items-center space-x-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25">
            <span className="material-icons text-sm">download</span>
            <span>Download Resume</span>
          </button>
          <button className="px-6 py-3 rounded-lg font-medium border border-gray-300 dark:border-[#2A303C] hover:bg-gray-100 dark:hover:bg-[#151921] transition-all">
            View Projects
          </button>
        </div>

        <div className="flex items-center space-x-4 pt-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">Follow me:</span>
          <div className="flex space-x-3">
            {[
              { icon: 'code', label: 'GitHub' },
              { icon: 'work', label: 'LinkedIn' },
              { icon: 'alternate_email', label: 'Email' },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="h-10 w-10 rounded-full bg-gray-200 dark:bg-[#151921] border border-gray-300 dark:border-[#2A303C] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#2563EB] dark:hover:text-[#2563EB] hover:border-[#2563EB] dark:hover:border-[#2563EB] transition-all"
              >
                <span className="material-icons text-sm">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative order-1 lg:order-2 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-200 dark:border-[#2A303C] shadow-2xl glow-effect bg-gray-100 dark:bg-[#151921]">
          <img
            alt="Portrait of Ahnaf Abid"
            className="object-cover w-full h-full transform transition hover:scale-105 duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEEcD012cSqkeLLlG7Yzr2t1Hilcus66AATR9PvXxu0u-gv2fFV8ZXgoiq-EbALuR7d1e09D-qN9VkkGQW3EJUNHkKOkBlpF2k-aB32es0AauseSOXjEbiGowMUkD45eiIqSLoWm-4LzE8jS5LQ5WwcwNVRnWlxBI-RsbV9lJUhXgH44dF3Un1x_G_4aaadqo9pBGTcK4TFABPokAOmYx4fO7PchHlM1JprU-27fr_zgHOtQNu8swEGvzLJp9wgjMPbDXtAXWt4Ik"
          />
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { icon: 'architecture', value: '8+', label: 'Years Experience' },
    { icon: 'inventory_2', value: '50+', label: 'Projects Shipped' },
    { icon: 'coffee', value: 'Infinite', label: 'Coffee Consumed' },
  ]

  return (
    <div className="border-y border-gray-200 dark:border-gray-800 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map(({ icon, value, label }, i) => (
          <div
            key={label}
            className={`flex items-start space-x-4 ${i > 0 ? 'border-l-0 md:border-l border-gray-200 dark:border-gray-800 md:pl-8' : ''}`}
          >
            <div className="text-[#2563EB] mt-1">
              <span className="material-icons text-4xl">{icon}</span>
            </div>
            <div>
              <h3 className="text-4xl font-bold">{value}</h3>
              <p className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mt-1">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AboutCards() {
  const cards = [
    {
      icon: 'explore',
      title: 'The Journey',
      text: 'I started coding by hacking apart HTML templates and fell in love with the instant feedback loop of web development. From those early static sites to complex SPAs, my drive has always been curiosity and the joy of creation.',
    },
    {
      icon: 'architecture',
      title: 'The Work',
      text: 'I enjoy crafting reusable component systems, optimizing performance metrics, and obsessing over micro-interactions. Clean code, semantic HTML, and accessible design are my non-negotiables for any project.',
    },
    {
      icon: 'sports_esports',
      title: 'The Human',
      text: "When I'm not shipping code, you can find me exploring local specialty coffee shops, gaming, or tinkering with smart home automation. I believe a balanced life fuels the best creativity.",
    },
  ]

  return (
    <section className="grid md:grid-cols-3 gap-6">
      {cards.map(({ icon, title, text }) => (
        <div
          key={title}
          className="bg-white dark:bg-[#151921] p-8 rounded-2xl border border-gray-200 dark:border-[#2A303C] hover:border-blue-500/50 transition-colors group"
        >
          <div className="h-10 w-10 bg-gray-100 dark:bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
            <span className="material-icons text-gray-900 dark:text-white group-hover:text-[#2563EB] text-xl">{icon}</span>
          </div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 dark:text-[#9CA3AF] text-sm leading-relaxed">{text}</p>
        </div>
      ))}
    </section>
  )
}

function EducationSection() {
  const degrees = [
    {
      period: '2014 - 2018',
      gpa: 'CGPA: 3.85/4.00',
      degree: 'B.Sc. in Computer Science',
      institution: 'North South University',
      icon: 'school',
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
      icon: 'menu_book',
      badgeClass: 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700',
      highlights: [
        'Concentration in Science (Physics, Chemistry, Math)',
        'Member of the College Debating Society',
        'Active participant in Science Fair 2013',
      ],
    },
  ]

  return (
    <section className="relative" id="education">
      <div className="flex items-center space-x-4 mb-10">
        <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
        <h2 className="text-sm font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase">Educational Qualification</h2>
        <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {degrees.map(({ period, gpa, degree, institution, icon, badgeClass, highlights }) => (
          <div
            key={degree}
            className="relative bg-white dark:bg-[#151921] p-8 rounded-2xl border border-gray-200 dark:border-[#2A303C] overflow-hidden group hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-icons text-9xl text-gray-400 dark:text-gray-600 transform rotate-12 translate-x-4 -translate-y-4">{icon}</span>
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>{period}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{gpa}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{degree}</h3>
              <p className="text-[#2563EB] font-medium mb-6">{institution}</p>
              <ul className="space-y-3 mt-auto">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start space-x-3 text-sm text-gray-600 dark:text-[#9CA3AF]">
                    <span className="material-icons text-[#2563EB] text-base mt-0.5">check_circle_outline</span>
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

function TechStack() {
  const techs = [
    { icon: 'html', label: 'HTML5' },
    { icon: 'css', label: 'CSS3' },
    { icon: 'javascript', label: 'JavaScript' },
    { icon: 'code', label: 'React' },
    { icon: 'integration_instructions', label: 'TypeScript' },
    { icon: 'brush', label: 'Tailwind' },
    { icon: 'layers', label: 'Next.js' },
    { icon: 'api', label: 'GraphQL' },
  ]

  return (
    <div className="relative py-8">
      <div className="flex items-center space-x-4 mb-8 justify-center">
        <div className="h-px bg-gray-200 dark:bg-gray-800 w-16 md:w-32"></div>
        <h2 className="text-sm font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase text-center">Technologies I Work With</h2>
        <div className="h-px bg-gray-200 dark:bg-gray-800 w-16 md:w-32"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {techs.map(({ icon, label }) => (
          <span
            key={label}
            className="px-4 py-2 bg-gray-100 dark:bg-[#151921] rounded border border-gray-300 dark:border-[#2A303C] text-sm font-medium flex items-center gap-2"
          >
            <span className="material-icons text-base">{icon}</span>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2024 Ahnaf Abid. Built with clean code and too much coffee.
      </p>
    </footer>
  )
}

export default function App() {
  // Default to dark mode
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark')
  }

  return (
    <div className="bg-[#F3F4F6] dark:bg-[#0B0E14] text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        <HeroSection />
        <StatsBar />
        <AboutCards />
        <EducationSection />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}
