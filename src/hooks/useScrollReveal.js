/**
 * useScrollReveal
 * ---------------
 * Returns a ref + Framer Motion variants for a scroll-triggered fade-up.
 * Usage:
 *   const { ref, variants, containerVariants } = useScrollReveal()
 *   <motion.div ref={ref} variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
 *     <motion.p variants={variants}>...</motion.p>
 *   </motion.div>
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13 } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
