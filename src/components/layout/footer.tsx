"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-emerald-600 text-white py-8"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 text-3xl mb-4">
          <span>🍎</span>
          <span>🥦</span>
          <span>💧</span>
          <span>🥕</span>
          <span>🍌</span>
        </div>
        <p className="text-emerald-100">
          Remember: Eat healthy, stay happy! 🌟
        </p>
        <p className="text-sm text-emerald-200 mt-2">
          A fun learning project about healthy eating
        </p>
      </div>
    </motion.footer>
  )
}
