import './index.css'

import Navbar            from './components/Navbar'
import HeroSection       from './components/HeroSection'
import StatsBar          from './components/StatsBar'
import AboutCards        from './components/AboutCards'
import EducationSection  from './components/EducationSection'
import TechStack         from './components/TechStack'
import ProjectsSection   from './components/ProjectsSection'
import ContactSection    from './components/ContactSection'
import Footer            from './components/Footer'

document.documentElement.classList.add('dark')

export default function App() {
  return (
    <div className="bg-[#0B0E14] text-white">
      <Navbar />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        <HeroSection />
        <StatsBar />
        <AboutCards />
        <EducationSection />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
