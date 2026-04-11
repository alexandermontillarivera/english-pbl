"use client"

import { motion } from "framer-motion"
import type { Solution } from "@/interfaces/food-types"

interface SolutionCardProps {
  solution: Solution
  index: number
}

export function SolutionCard({ solution, index }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: "spring" }}
      whileHover={{ scale: 1.02 }}
      className={`${solution.color} p-6 rounded-2xl border-2 border-transparent hover:border-gray-200 transition-all`}
    >
      <div className="flex items-start gap-4">
        <motion.span
          className="text-4xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
        >
          {solution.emoji}
        </motion.span>
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">{solution.title}</h3>
          <p className="text-gray-600">{solution.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
