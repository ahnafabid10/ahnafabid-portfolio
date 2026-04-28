import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-gray-800 py-8 text-center"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
    >
      <p className="text-sm text-[#9CA3AF]">
        © 2024 Ahnaf Abid. Built with clean code and too much coffee.
      </p>
    </motion.footer>
  )
}
