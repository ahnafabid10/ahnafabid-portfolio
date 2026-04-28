import { useEffect, useState } from 'react'

export default function SplashScreen({ onDone }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // After 4s start the exit slide-up, then unmount
    const t = setTimeout(() => {
      setExiting(true)
      setTimeout(onDone, 700)
    }, 4000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center
        transition-transform duration-700 ease-in-out
        ${exiting ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white text-center px-6">
        Welcome to my<br />digital space
      </h1>
    </div>
  )
}
