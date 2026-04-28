import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Each word animates in separately for a cinematic feel
const WORDS = ['Welcome', 'to', 'my', 'digital', 'space']

export default function SplashScreen({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // 3 seconds total, then slide up
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onDone, 700)
    }, 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Word-by-word stagger */}
          <div className="flex flex-wrap items-end justify-center gap-x-5 gap-y-2 px-6">
            {WORDS.map((word, i) => (
              <div key={word + i} className="overflow-hidden">
                <motion.span
                  className={`block font-black leading-none tracking-tight text-white
                    ${word === 'Welcome'
                      ? 'text-[clamp(4rem,14vw,9rem)]'
                      : 'text-[clamp(1.4rem,4vw,3rem)] text-gray-400 font-light'
                    }`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Animated underline */}
          <motion.div
            className="mt-6 h-px bg-gray-700"
            initial={{ width: 0 }}
            animate={{ width: '4rem' }}
            transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
