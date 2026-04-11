"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PYRAMID_LEVELS = [
  {
    id: 1,
    name: "Fats & Sweets",
    description: "Eat very little. These foods have lots of sugar and fat.",
    foods: ["🍬", "🍭", "🍫", "🧈"],
    color: "bg-red-400",
    width: "w-32",
    portions: "Very little",
  },
  {
    id: 2,
    name: "Dairy & Proteins",
    description: "Eat 2-3 portions. Good for muscles and bones!",
    foods: ["🥛", "🧀", "🍗", "🥚", "🐟", "🥜"],
    color: "bg-amber-400",
    width: "w-48",
    portions: "2-3 portions",
  },
  {
    id: 3,
    name: "Fruits & Vegetables",
    description: "Eat 5 or more portions. Full of vitamins!",
    foods: ["🍎", "🍊", "🥕", "🥦", "🍇", "🥬", "🍌", "🫐"],
    color: "bg-green-400",
    width: "w-64",
    portions: "5+ portions",
  },
  {
    id: 4,
    name: "Grains & Cereals",
    description: "Eat 6-8 portions. They give you energy!",
    foods: ["🍞", "🍚", "🥣", "🌾", "🥐", "🍝"],
    color: "bg-amber-600",
    width: "w-80",
    portions: "6-8 portions",
  },
]

export function FoodPyramidSection() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)

  return (
    <section id="pyramid" className="py-16 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Food Pyramid
          </h2>
          <p className="text-lg text-muted-foreground">
            Click on each level to learn what foods to eat!
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-2">
          {PYRAMID_LEVELS.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <motion.button
                onClick={() => setSelectedLevel(selectedLevel === level.id ? null : level.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${level.color} ${level.width} h-16 rounded-lg shadow-lg 
                  flex items-center justify-center gap-2 text-white font-semibold
                  hover:brightness-110 transition-all cursor-pointer
                  ${selectedLevel === level.id ? "ring-4 ring-foreground/30" : ""}`}
              >
                <span className="text-2xl">{level.foods[0]}</span>
                <span className="text-sm md:text-base">{level.name}</span>
              </motion.button>

              <AnimatePresence>
                {selectedLevel === level.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10 w-72 md:w-80"
                  >
                    <div className="bg-card p-4 rounded-xl shadow-xl border">
                      <div className="flex flex-wrap gap-2 justify-center mb-3">
                        {level.foods.map((food, i) => (
                          <span key={i} className="text-3xl">{food}</span>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground text-center mb-2">
                        {level.description}
                      </p>
                      <p className="text-xs font-semibold text-primary text-center">
                        Daily: {level.portions}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Base = Eat more | Top = Eat less
          </p>
        </motion.div>
      </div>
    </section>
  )
}
