"use client"

import { motion } from "framer-motion"
import { SolutionCard } from "@/components/cards/solution-card"
import { SOLUTIONS } from "@/config/constants"

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            💡 Step 3: Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How to Eat Healthy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple tips to eat healthy every day!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
